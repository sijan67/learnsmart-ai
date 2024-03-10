import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View,  TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { Text, TextInput, Button } from 'react-native-paper';

import { useLecture } from '../../context/LectureContext';

export default function Dashboard({navigation}) {
  const [lectureTitle, setLectureTitle] = useState(''); // For naming the lecture recording
  const [lectureContent, setLectureContent] = useState(''); // For naming the lecture recording
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

   // Using context to manage lecture data
  const { updateLectureData } = useLecture();

  useEffect(() => {
    (async () => {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
      });
    })();
  }, []);

  // Updated function to handle "Clarify More" action
  const handleClarifyMore = async () => {
    console.log("inside handle Clarify more")
    if (lectureContent) {
      setIsLoading(true);
      console.log(isLoading)
      try {
        const response = await fetch('http://206.87.193.250:3000/api/clarify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Please explain to me how ${lectureContent} works`,
          }),
        });
        const data = await response.json();
        updateLectureData({ lectureTitle: lectureTitle, lectureContent: lectureContent, clarification: data.text });

        navigation.navigate('Clarify');
        // Optionally, navigate to a screen that uses this data from context
        // navigation.navigate('SomeScreenUsingContext');
      } catch (err) {
        console.error('Error fetching clarification', err);
      } finally {
        setIsLoading(false);
      }
    }
  };


  const startRecording = async () => {
    setIsLoading(true);
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
    setIsLoading(false);
  };

  const stopRecording = async () => {
    setIsLoading(true);
    setRecording(undefined);
    setIsRecording(false);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    // Here you can handle the recording file, e.g., uploading it or using it in your app
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Dashboard</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={setLectureTitle}
        value={lectureTitle}
        placeholder="Enter Lecture Title"
        label="Enter Lecture Title"
        placeholderTextColor="gray"
      />

<TextInput
        style={styles.textInputContent}
        onChangeText={setLectureContent}
        value={lectureContent}
        placeholder="Enter Lecture Content To Summarize / Terms to Clarify"
        label="Enter Lecture Content"
        placeholderTextColor="gray"
        multiline={true}
        blurOnSubmit={true}
      />

{isLoading ? (
  <>

  <ActivityIndicator size="large" color="#9DD9D2" />
  <Text >Getting Result</Text>
  </>
  
) : (

  <>
 
 <TouchableOpacity
  style={styles.button}
  onPress={handleClarifyMore}
>
  <Text style={styles.buttonText}>Clarify More</Text>
</TouchableOpacity>


  <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Summary');
        }}
      >
        <Text style={styles.buttonText}>Summarize</Text>
  </TouchableOpacity>
  
  </>
)}


{/* {isLoading ? (
  <ActivityIndicator size="large" color="#9DD9D2" />
) : (

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Summary');
        }}
      >
        <Text style={styles.buttonText}>Summarize</Text>
      </TouchableOpacity>

)} */}

      {/* Placeholder for future features: Clarify More and Visualize Functionality */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfe6fa',
    padding: 20,
  },
  headerText: {
    fontFamily: 'LondrinaShadow_400Regular',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    padding: 10,
    marginBottom: 20,
    color: 'black',
  },
  textInputContent: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    padding: 10,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: '#2B8BB7',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'KleeOne_600SemiBold',
    fontSize: 20,
  },
});

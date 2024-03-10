import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View,  TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { Text, TextInput, Button } from 'react-native-paper';

export default function Dashboard() {
  const [lectureTitle, setLectureTitle] = useState(''); // For naming the lecture recording
  const [lectureContent, setLectureContent] = useState(''); // For naming the lecture recording
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
        placeholder="Enter Lecture Content "
        label="Enter Lecture Content"
        placeholderTextColor="gray"
        multiline={true}
        blurOnSubmit={true}
      />



      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Clarify More</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Summarize</Text>
      </TouchableOpacity>

      {isLoading && <ActivityIndicator size="large" color="#9DD9D2" />}

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
    fontSize: 20,
  },
});

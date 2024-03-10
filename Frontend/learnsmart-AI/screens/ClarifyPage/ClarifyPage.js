import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, Linking } from 'react-native';
import { List } from 'react-native-paper';
import { useLecture } from '../../context/LectureContext';
import style from './style';

const Clarify = ({ navigation }) => {
  const { lectureData } = useLecture();

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>Clarification History</Text>
      <ScrollView style={{ width: '100%' }}>
        <List.Section title="">
          {lectureData.map((lecture, index) => (
            <List.Accordion
              style={{ width: 400 }}
              key={index}
              title={lecture.lectureTitle}
              titleNumberOfLines={3}
              left={(props) => <List.Icon {...props} icon="book" />}
            >
              <List.Item
                titleNumberOfLines={15}
                title={`Term: ${lecture.lectureContent}`}
              />

              <List.Item
                titleNumberOfLines={100}
                title={`Clarification: ${lecture.clarification}`}
              />

              <Text style={{ fontSize: 12, marginTop: 5, marginBottom: 2 }}> Sources: </Text>
              {/* Iterate over clarificationLinks to create a link for each URL */}
              {lecture.clarificationLinks && lecture.clarificationLinks.map((url, linkIndex) => (
                <TouchableOpacity key={linkIndex} onPress={() => handleLinkPress(url)}>
                  <Text style={{ paddingLeft: 15, marginBottom: 5, color: 'blue', textDecorationLine: 'underline' }}>
                    {url}
                  </Text>
                </TouchableOpacity>
              ))}
            </List.Accordion>
          ))}
        </List.Section>
      </ScrollView>

      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.goBack(null);
        }}
      >
        <Text style={style.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Clarify;

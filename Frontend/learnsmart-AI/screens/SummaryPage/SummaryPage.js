import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import style from './style';
import { useAppContext } from '../../context/AppContext';
import TreeView from 'react-native-final-tree-view';
import { List } from 'react-native-paper';
import { useLecture } from '../../context/LectureContext';

const Summary = ({navigation}) => {
  const { setShowWelcome } = useAppContext();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

 
  const { lectureSummary } = useLecture();
  

  return (
    <SafeAreaView style={style.container}>
    <Text style={style.title}> Summary History </Text>

    <ScrollView style={{ width: '100%' }}> 
 <List.Section title="">
        {lectureSummary.map((lecture, index) => (
          <List.Accordion
            style={{width: 400}}
            key={index} // Using index as a key; consider changing if the list is dynamic
            title={lecture.lectureTitle}
            titleNumberOfLines={3}
            left={props => <List.Icon {...props} icon="book" />}
          >

        <List.Item         
          titleNumberOfLines={15}
          title={`Original Content: ${lecture.lectureContent}`}
          >
        </List.Item>
        
        <List.Item         
        titleNumberOfLines={100}
        title={`Summary: ${lecture.summary}`}
        >
        </List.Item>
          </List.Accordion>
        ))}
      </List.Section>

</ScrollView>

    <TouchableOpacity
        style={style.button}
        onPress={() => {
          setShowWelcome(true);
          navigation.goBack(null) ; // TO DO: Need to make this to go back to Welcome Screen
        }}
      >
        <Text style={style.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Summary;

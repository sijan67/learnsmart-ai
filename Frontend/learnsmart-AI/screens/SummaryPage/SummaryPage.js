import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import style from './style';
import { useAppContext } from '../../context/AppContext';
import TreeView from 'react-native-final-tree-view';
import { List } from 'react-native-paper';

const Summary = ({navigation}) => {
  const { setShowWelcome } = useAppContext();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
 

  return (
    <SafeAreaView style={style.container}>
    <Text style={style.title}> Summary History </Text>

    <List.Section title="">

      <List.Accordion
        style={{width: 400}}
        title="Lecture 3Lecture 3Lecture 3Lecture 3Lecture 3Lecture 3 "
        titleNumberOfLines={3}

        left={props => <List.Icon {...props} icon="book" />
      }
        >
        <List.Item         
        titleNumberOfLines={15}
        title="Content: Lecture 3Lecture 3Lecturre3Lecturre3Lecturre3Lecturre 3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture 3 "
        >
        </List.Item>
        
        <List.Item         
        titleNumberOfLines={15}
        title="Summary: Lecture 3Lecture 3Lecturre3Lecturre3Lecturre3Lecturre 3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture3Lecture 3 "
        >
        </List.Item>
      </List.Accordion>

    </List.Section>


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

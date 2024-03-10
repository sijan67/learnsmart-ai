import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import style from './style';
import { useAppContext } from '../../context/AppContext';
import TreeView from 'react-native-final-tree-view';
import { List } from 'react-native-paper';

const Clarify = ({navigation,  route}) => {
  const { setShowWelcome } = useAppContext();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const { lectureTitle, lectureContent, clarification } = route.params;
 

  return (
    <SafeAreaView style={style.container}>
    <Text style={style.title}> Clarification History </Text>

    <List.Section title="">
    {lectureTitle && (
      <List.Accordion
        style={{width: 400}}
        title={lectureTitle}
        left={props => <List.Icon {...props} icon="book" />}
      >

      <List.Section style={{width: 300, height: 200}}>
        <List.Subheader>Term: {lectureContent} </List.Subheader>
        <List.Subheader>Clarification: {clarification} </List.Subheader>
      </List.Section>
    </List.Accordion>
  )}
</List.Section>

    <List.Section title="">
      <List.Accordion
        style={{width: 400}}
        title="Lecture Title"
        left={props => <List.Icon {...props} icon="book" />}
        >
        <List.Section>
        <List.Subheader>Term: Check </List.Subheader>
        <List.Subheader>Clarification: CheckCheck check check check cehck check check </List.Subheader>
        </List.Section>
      </List.Accordion>

      <List.Accordion
        style={{width: 400}}
        title="Lecture Title"
        left={props => <List.Icon {...props} icon="book" />}
        >
        <List.Section>
        <List.Subheader>Content: Check </List.Subheader>
        <List.Subheader>Summary: CheckCheck </List.Subheader>
        </List.Section>
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

export default Clarify;

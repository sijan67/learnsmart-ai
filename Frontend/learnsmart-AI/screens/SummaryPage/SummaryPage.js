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
        title="Lecture Title"
        left={props => <List.Icon {...props} icon="book" />}
        >
        <List.Section>
        <List.Subheader>Content: Check </List.Subheader>
        <List.Subheader>Summary: CheckCheck </List.Subheader>
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

export default Summary;

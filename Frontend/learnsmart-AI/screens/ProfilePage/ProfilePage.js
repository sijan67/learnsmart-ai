import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import style from './style';
import { useAppContext } from '../../context/AppContext';
import TreeView from 'react-native-final-tree-view';

const Clarify = ({navigation}) => {
  const { setShowWelcome } = useAppContext();
 

  return (
    <SafeAreaView style={style.container}>
    <Text style={style.title}> Clarification History </Text>


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

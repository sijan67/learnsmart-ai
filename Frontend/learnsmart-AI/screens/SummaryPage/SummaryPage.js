import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import style from './style';
import { useAppContext } from '../../context/AppContext';
import TreeView from 'react-native-final-tree-view';

const Summary = ({navigation}) => {
  const { setShowWelcome } = useAppContext();

  const state = {
    data: [
      {
        id: 'Parent1',
        name: 'Parent1',
        children: [
          {
            id: 'child1',
            name: 'child1',
            children: [
              {
                id: 'child11',
                name: 'child11',
                children: [
                  {
                    id: 'child111',
                    name: 'child111',
                  },
                ],
              },
              {
                id: 'child12',
                name: 'child12',
              },
            ],
          },
        ],
      },
      {
        id: 'Parent2',
        name: 'Parent2',
        children: [
          {
            id: 'child2',
            name: 'child2',
            children: [
              {
                id: 'child21',
                name: 'child21',
              },
              {
                id: 'child22',
                name: 'child22',
              },
            ],
          },
        ],
      },
    ],
  };

  const getIndicator = (isExpanded, hasChildrenNodes) => {
    if (!hasChildrenNodes) {
      return '*';
    } else if (isExpanded) {
      return '-';
    } else {
      return '+';
    }
  };
  

  return (
    <SafeAreaView style={style.container}>
    <Text style={style.title}> Summary History </Text>

    

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

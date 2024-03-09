import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from './style';

export default function WelcomeScreen({ navigation, setShowWelcome }) {
  return (
    <View style={style.container}>
      <Text style={style.appName}> LearnSmart AI </Text>
      <Text style={style.appQuote}> Get your personalized </Text>
      <Text style={style.appQuote2}> AI Study guide </Text>
      <Image
        source={require('../../assets/logo-2.png')} // Replace 'welcome_image.png' with your image file name
        style={style.welcomeImage} // Add a custom style if needed
      />
      

      <TouchableOpacity
        style={style.yellowButton} // Apply the custom yellowButton style
        onPress={() => {
          setShowWelcome(false);
          navigation.navigate('Home');
        }}
      >
        <Text style={style.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

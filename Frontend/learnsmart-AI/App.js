import React from 'react'

import Navigator from './config/navigator';
import { AppProvider } from './context/AppContext';

// https://github.com/expo/google-fonts

import { useFonts, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';
import { Lusitana_400Regular, Lusitana_700Bold } from '@expo-google-fonts/lusitana';
import { Nobile_400Regular, Nobile_700Bold } from '@expo-google-fonts/nobile';
import { LondrinaShadow_400Regular } from '@expo-google-fonts/londrina-shadow';


import { MD3LightTheme as DefaultTheme, configureFonts, PaperProvider } from 'react-native-paper';

 

const theme = {
   ...DefaultTheme,
   roundness: 2,
   colors: {
     ...DefaultTheme.colors,
     primary: '#3498db',
     accent: '#f1c40f',
   },
  
};

export default function App() {
   const [fontsLoaded] = useFonts({
      PlayfairDisplay_400Regular,
      Nobile_400Regular,
      Nobile_700Bold,
      Lusitana_400Regular,
      Lusitana_700Bold,
      LondrinaShadow_400Regular
    })
    if (!fontsLoaded) {
      return undefined
    }

  return (
   <AppProvider>
   <PaperProvider theme={theme}>
     <Navigator/>
  </PaperProvider>
  </AppProvider>
  );
  }


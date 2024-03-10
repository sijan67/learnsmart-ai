import React from 'react'

import Navigator from './config/navigator';
import { AppProvider } from './context/AppContext';

import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     primary: 'tomato',
     secondary: 'yellow',
   },
 };

export default function App() {
  return (
   <AppProvider>
   <PaperProvider theme={theme}>
     <Navigator/>
  </PaperProvider>
  </AppProvider>
  );
  }


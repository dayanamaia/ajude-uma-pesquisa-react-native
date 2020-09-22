import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading  } from 'expo';
import { useFonts } from 'expo-font';
import { Catamaran_400Regular , Catamaran_500Medium } from '@expo-google-fonts/catamaran';
import { Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';

import Home from './src/views/Home/index';

export default function App() {
  let [fontsLoaded] = useFonts({
    Catamaran_400Regular,
    Catamaran_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Home />
        <StatusBar style="auto" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

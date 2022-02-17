import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function BookApp() {

  const[ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      //load book genres here.
      
    })();
  });

  if(!ready) {
    return <></>
  }

  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}
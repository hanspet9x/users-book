import {View, Text} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import SplashView from '../containers/splashscreen/SplashView';

export default function BookApp() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      // load book genres here.
    })();
  });

  if (!ready) {
    return <SplashView />;
  }

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

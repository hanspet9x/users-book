import {useEffect} from 'react';
import {useState} from 'react';
import {fonts} from '../assets/assets';
import {loadObjFonts} from '../utils/utils';
import * as Splash from 'expo-splash-screen';
import {LogService} from './../services/log/LogService';

export const useCacheAsset = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await Splash.preventAutoHideAsync();
        await loadObjFonts(fonts);
        await Splash.hideAsync();
      } catch (error) {
        LogService.error(error);
      } finally {
        setLoaded(true);
      }
    })();
  });
  return loaded;
};

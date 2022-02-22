import Constants from 'expo-constants';

export const getExtra = (name: string, defaultValue = '') => {
  if (Constants.manifest && Constants.manifest.extra) {
    return Constants.manifest.extra[name] || defaultValue;
  }
  return defaultValue;
};

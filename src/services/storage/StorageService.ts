import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StorageService {
  static async has(name: string) {
    const item = await AsyncStorage.getItem(name);
    return item == undefined;
  }

  static async equal(name: string, data: string) {
    const item = await AsyncStorage.getItem(name);
    return item == data;
  }

  static async getOrDefault(name: string, defaultValue?: any) {
    const item = await AsyncStorage.getItem(name);
    if (item) {
      return item;
    }
    return defaultValue;
  }

  static getStorage() {
    return AsyncStorage;
  }
}

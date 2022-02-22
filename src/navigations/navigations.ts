import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './stacks';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = <T>(name: keyof RootStackParamList, params?: T) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params as any);
  }
};

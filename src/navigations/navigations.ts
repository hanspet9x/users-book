import {useNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './stacks';

export const navigationRef = useNavigationContainerRef<RootStackParamList>();

export const navigate = (name: keyof RootStackParamList, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

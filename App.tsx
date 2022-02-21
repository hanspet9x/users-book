import {Provider as PaperProvider} from 'react-native-paper';
import {appTheme} from './src/styles/paperTheme';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigations/AppNavigation';
import {navigationRef} from './src/navigations/navigations';
export default function App() {
  return (
    // <Provider store={store}>
    <PaperProvider theme={appTheme}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
    // </Provider>
  );
}


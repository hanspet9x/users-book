import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {appTheme} from './src/styles/paperTheme';
import AppNavigation from './src/navigations/AppNavigation';
import {navigationRef} from './src/navigations/navigations';
import {registerRootComponent} from 'expo';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={appTheme}>
        <NavigationContainer ref={navigationRef}>
          <AppNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
registerRootComponent(App);


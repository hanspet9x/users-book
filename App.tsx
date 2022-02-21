import {Provider as PaperProvider} from 'react-native-paper';
import BookApp from './src/pages';
import {appTheme} from './src/styles/paperTheme';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    // <Provider store={store}>
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        
      </NavigationContainer>
    </PaperProvider>
    // </Provider>
  );
}


import {Provider as PaperProvider} from 'react-native-paper';
import BookApp from './src/pages';
import {appTheme} from './src/styles/paperTheme';
export default function App() {
  return (
    // <Provider store={store}>
    <PaperProvider theme={appTheme}>
      <BookApp />
    </PaperProvider>
    // </Provider>
  );
}


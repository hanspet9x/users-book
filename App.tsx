import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import {Provider as PaperProvider} from 'react-native-paper'
import BookApp from "./src/pages";
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <BookApp />
      </PaperProvider>
    </Provider>
  )
}


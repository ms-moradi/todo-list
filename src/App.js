import Home from '../src/page/home/home';
import {Provider} from 'react-redux';
import {store} from "./component/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;

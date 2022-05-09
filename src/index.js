import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as ReactDOMClient from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.min.css'
import './i18n'

import App from './app/App';
import { configureStore } from './app/store/configureStore';

const {store, persistor} = configureStore();

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('App rendered successfully');
  });

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  )
}

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<AppWithCallbackAfterRender/>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

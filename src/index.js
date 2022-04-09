import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.min.css'

import App from './app/App';
import { configureStore } from './app/store/configureStore';

const storeConfigured = configureStore();

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('App rendered successfully');
  });

  return (
    <React.StrictMode>
      <Provider store={storeConfigured}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<AppWithCallbackAfterRender/>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

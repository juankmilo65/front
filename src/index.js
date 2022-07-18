import React, {useEffect,useCallback, useState, Suspense} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { useTranslation } from "react-i18next"
import * as ReactDOMClient from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import enUS from 'antd/es/locale/en_US';
import esES from 'antd/es/locale/es_ES';
import 'antd/dist/antd.min.css'
import './i18n'

import App from './app/App';
import { configureStore } from './app/store/configureStore';

const {store, persistor} = configureStore();

function AppWithCallbackAfterRender() {

  const {i18n} = useTranslation();

  const [antaLang, setAntLang] = useState(); 

  const createAntLang = useCallback(() => {
    if(i18n.language === 'en'){
      setAntLang(enUS)
    }else if(i18n.language === 'es'){
      setAntLang(esES)
    }
  },[i18n.language] )

  useEffect(() => {
    console.log('App rendered successfully');
  })

  useEffect(() => {
    createAntLang();
  }, [createAntLang, i18n.language]);

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Suspense fallback={null}>
            <Router> 
              <ConfigProvider locale={antaLang}>
              <App />
              </ConfigProvider>
            </Router>
          </Suspense>
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

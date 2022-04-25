import { useEffect, Suspense }  from 'react';
import { bindActionCreators  } from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import Layaout from '../components/layout/Layaout';
import Login from '../components/login/Login'
import loginActions from '../components/login/logingActions'

function App() {

  const state = useSelector((state)=> state.login)
  const dispapatch = useDispatch();
  const { loginSuccess} = bindActionCreators(loginActions, dispapatch)

  useEffect(() => {
    if(state.token === '' && (localStorage.getItem("token") !== '' && localStorage.getItem("token") !== null))
    {
      loginSuccess(localStorage.getItem("token"));
    }
  }, [loginSuccess, state.token])

  return (
    <Suspense fallback={null}>
       <Router> 
        {(state.token === '') ?
          (<Login/>) :
          (<Layaout/>)
        }
      </Router>
    </Suspense>
  );
}

export default App;

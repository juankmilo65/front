import {useEffect, Suspense }  from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

import Layaout from '../components/layout/Layaout';
import Login from '../components/login/Login'

function App() {

  const state = useSelector((state)=> state.login);
  // const location = useLocation();

  useEffect(() => {

    if(state.token !== null  && window.location.pathname === '/' )
    {
      window.location.pathname = '/dashboard'
    }
  }, [state.token])

  return (
    <Suspense fallback={null}>
       <Router> 
        {(state.token === null) ?
          (<Login/>) :
          (<Layaout/>)
        }
      </Router>
    </Suspense>
  );
}

export default App;

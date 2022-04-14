import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Layaout from '../components/layout/Layaout';
import Login from '../components/login/Login'

function App() {

  useEffect(() => {
 
  },[]);

  const [token ] = useState(false);

  return (
    <Router> 
      {token ?
        (<Layaout />) :
        (<Login/>)
      }
    </Router>
  );
}

export default App;

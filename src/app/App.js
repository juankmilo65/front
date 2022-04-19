import { useEffect, useState, Suspense }  from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Layaout from '../components/layout/Layaout';
import Login from '../components/login/Login'

function App() {

  useEffect(() => {
 
  },[]);

  const [token ] = useState(false);

  return (
    <Suspense fallback={null}>
       <Router> 
        {token ?
          (<Layaout />) :
          (<Login/>)
        }
      </Router>
    </Suspense>
  );
}

export default App;

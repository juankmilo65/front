import React, { useEffect }  from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Layaout from '../components/layout/Layaout';

function App() {

  useEffect(() => {
 
  },[]);

  return (
    <Router>
      <Layaout />
    </Router>
  );
}

export default App;

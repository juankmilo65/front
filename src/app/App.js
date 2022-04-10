import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layaout from '../components/layout/Layaout';
import {WrapLayaout} from '../components/layout/Layaout.styles'


function App() {

  useEffect(() => {
 
  },[]);

  return (
    <BrowserRouter>
      <Layaout />
    </BrowserRouter>
  );
}

export default App;

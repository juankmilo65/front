import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from '../components/layout/Navbar';
import {WrapLayaout} from '../components/layout/Navbar.styles'


function App() {

  useEffect(() => {
 
  },[]);

  return (
    <BrowserRouter>
      < >
        <Navbar />
      </>
    </BrowserRouter>
  );
}

export default App;

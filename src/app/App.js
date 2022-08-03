import {useEffect }  from 'react';
import { Route, useLocation, Routes, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

import Layaout from '../components/layout/Layaout';
import Login from '../components/login/Login'
import Register from '../components/register/Register'

function App() {

  const state = useSelector((state)=> state.login);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(state.token !== null  && location.pathname === '/' )
    {
      navigate('/dashboard');
    }
  }, [state.token, navigate, location])

  return (
        <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/register" element={<Register/>}/>
              <Route path="/dashboard" element={<Layaout/>} />
              <Route path="/users" element={<Layaout/>} />
              <Route path="/statistics" element={<Layaout/>} />
              <Route path="/roles" element={<Layaout/>} />
        </Routes>
  );
}

export default App;

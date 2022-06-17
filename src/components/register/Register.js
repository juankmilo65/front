import React from 'react'
import { useNavigate } from "react-router-dom";

import CreateUser from '../createUser/CreateUser'

function Register() {

  const handlerChildCloseModal = React.useRef(null);
  
  const navigate = useNavigate();

  const refreshUsers = () => {
    navigate('/')
  }

  return (
    <div><CreateUser handlerMethod={refreshUsers} handlerChildCloseModal={handlerChildCloseModal}/></div>
  )
}

export default Register

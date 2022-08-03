import React, {memo} from 'react'
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import { Layout } from 'antd';

import Footer from '../footer/Footer'
import CreateUser from '../createUser/CreateUser'
import { RegisterTitle, WrapperCrearUser } from './register.styles'

const { Header } = Layout;

function Register() {
  const {t} = useTranslation(['createUsers']);
  const handlerChildCloseModal = React.useRef(null);
  
  const navigate = useNavigate();

  const refreshUsers = () => {
    navigate('/')
  }

  return (
    <>
       <Header className="site-layout-background" style={{ zIndex: 1, display:'flex', justifyContent: 'center', position: 'sticky', top:0, color:'white', padding: 0,  background: 'linear-gradient(to right, #4C2C89, #2a0845)'}} >
        <RegisterTitle>{t("register")}</RegisterTitle>
      </Header>
      <WrapperCrearUser>
        <CreateUser handlerMethod={refreshUsers} handlerChildCloseModal={handlerChildCloseModal}/>
      </WrapperCrearUser>
      <Footer/>
    </>
  )
}

export default memo(Register)

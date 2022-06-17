import React, { useState } from 'react'
import { bindActionCreators  } from 'redux'
import { Modal } from 'antd';
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import loginActions from '../login/logingActions'
import {LogoutButton} from './MenuPopover.styles'

function MenuPopover() {
  const {t} = useTranslation(['menuPopover']);

  const navigate = useNavigate();
  const dispapatch = useDispatch();
  const { cleanToken } = bindActionCreators(loginActions, dispapatch);

  const [openWarningModal, setOpenWarningModal] = useState(false);

  const { confirm } = Modal;

  const validateLogourt = () => {
    setOpenWarningModal(true);
  }

  const showConfirmClose = () =>{
    confirm({
      title: `${t("warningModal")}`,
      icon: <ExclamationCircleOutlined />,
      content: `${t("cancelCreationMessage")}`,
      onOk() { logout() },
      onCancel() { setOpenWarningModal(false) },
      okText:"Ok",
      cancelText:`${t("cancel")}`
    });
  }

  const logout = () => {
    cleanToken();
    navigate('/')
  }

  return (
      <div>
        <p><UserOutlined /> {t("profile")}</p>
        <LogoutButton onClick={()=> validateLogourt()}><LogoutOutlined /> {t("logout")}</LogoutButton>
        {openWarningModal && showConfirmClose()}
      </div>
  )
}

export default MenuPopover
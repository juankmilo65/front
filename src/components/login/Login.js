import React, {useEffect} from 'react'
import { bindActionCreators  } from 'redux'
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch} from 'react-redux'
import { Form, Input, Button, Checkbox, Tag } from 'antd';
import { CloseCircleOutlined} from '@ant-design/icons';

import Footer from '../footer/Footer'
import loginActions from './logingActions'
import {WrapperLogin, ContainerLogin, Logo, WrapperContentLogin, WrapperLogo} from './Login.styles'


function Login() {

  const {t} = useTranslation(['login', 'common'])
  const state = useSelector((state)=> state.login)
  const dispapatch = useDispatch();

  const {login} = bindActionCreators(loginActions, dispapatch)

  useEffect(() => {
    if(state.token !== '')
    {
      
    }
  }, [state.token])
  

  const onFinish =  (values) => {
     login(values);
  };

  const onFinishFailed = (errorInfo) => {debugger
      console.log('Failed:', errorInfo);
  };
    
  return (
    <WrapperLogin>
      <ContainerLogin>
        <WrapperLogo>
          <Logo/>
        </WrapperLogo>
        <WrapperContentLogin>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={t("email")}
              name="email"
              rules={[{ required: true, message: `${t("inputYourMail")}` }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("password")}
              name="password"
              rules={[{ required: true, message: `${t("inputYourPassword")}` }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={state.isLoading} >
              {t("save")}
              </Button>
            </Form.Item>
            {state.errorMessage === '' ? 
              null : 
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Tag icon={<CloseCircleOutlined />} color="error">{state.errorMessage}</Tag>
              </Form.Item>
            }
          </Form>
        </WrapperContentLogin>
      </ContainerLogin>
      <Footer/>
    </WrapperLogin>
  )
}

export default Login
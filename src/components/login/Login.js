import React, {useEffect} from 'react'
import { bindActionCreators  } from 'redux'
import { useSelector, useDispatch} from 'react-redux'
import { Form, Input, Button, Checkbox, Tag } from 'antd';
import {PoweroffOutlined, CloseCircleOutlined} from '@ant-design/icons';

import loginActions from './logingActions'



function Login() {

  const state = useSelector((state)=> state.login)
  const dispapatch = useDispatch();

  const {login} = bindActionCreators(loginActions, dispapatch)

  useEffect(() => {
    if(state.token !== '')
    {
      debugger
    }
  }, [state.token])
  

  const onFinish =  (values) => {
     login(values);
  };

  const onFinishFailed = (errorInfo) => {debugger
      console.log('Failed:', errorInfo);
  };
    
  return (
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
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={state.isLoading} >
          Submit
        </Button>
      </Form.Item>
      {state.errorMessage === '' ? 
        null : 
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Tag icon={<CloseCircleOutlined />} color="error">{state.errorMessage}</Tag>
        </Form.Item>
      }
    </Form>
  )
}

export default Login
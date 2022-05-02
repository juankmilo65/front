import React from 'react';
import { bindActionCreators  } from 'redux'
import { useSelector, useDispatch} from 'react-redux'
import { Form, Input, Select, Checkbox, Button } from 'antd';
import jwt_decode from "jwt-decode";

import prefix from './prefix'
import {Flag} from './CreateUser.styles'

import createUserActions from './createUserActions'

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function CreateUser({handlerMethod}) {
  
  const [form] = Form.useForm();
  const dispapatch = useDispatch();
  const {createUser } = bindActionCreators(createUserActions, dispapatch);
  const loginState = useSelector((state)=> state.login);

  const onFinish = (values) => {
    const decoded = jwt_decode(loginState.token);
    values.parentId = decoded.id
    createUser(values)
    handlerMethod()
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 90 }}>
       {prefix.map(o=>{
         return <Option value={o.prefix}><Flag theme={o.flag}/> {o.prefix}</Option>
       })}
      </Select>
    </Form.Item>
  );
 
    
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="Lastname"
        rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[{ required: true, message: 'Please input your address', whitespace: true}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="country"
        label="Country"
        rules={[{ required: true, message: 'Please select country!' }]}
      >
        <Select placeholder="select plan">
          <Option value="Colombia">Colombia</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="city"
        label="City"
        rules={[{ required: true, message: 'Please select city!' }]}
      >
        <Select placeholder="select plan">
          <Option value="Medellín">Medellin</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="plan"
        label="Plan"
        rules={[{ required: true, message: 'Please select plan!' }]}
      >
        <Select placeholder="select plan">
          <Option value="plan1">Plan 1</Option>
          <Option value="plan2">Plan 2</Option>
          <Option value="plan3">Plan 3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateUser

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect } from 'react';
import { bindActionCreators  } from 'redux'
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch} from 'react-redux'
import { Form, Input, Select, Checkbox, Button, Modal } from 'antd';
import jwt_decode from "jwt-decode";
import { ExclamationCircleOutlined, CheckCircleFilled , CloseCircleFilled } from '@ant-design/icons';

import prefix from './prefix'
import counties from '../../utilities/countriesCities.json'
import {Flag} from './CreateUser.styles'

import createUserActions from './createUserActions'
import plansActions from '../plans/plansActions'

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

const filterCountries = ['Argentina','Colombia', 'Ecuador', 'Mexico', 'Panama', 'Spain', 'United States']

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

function CreateUser({handlerMethod, handlerChildCloseModal }) {
  
  const {t, i18n} = useTranslation(['createUsers']);
 
  const { confirm , success, error} = Modal;
  const [form] = Form.useForm();
  const dispapatch = useDispatch();
 
  const [openWarningModal, setOpenWarningModal] = useState(false)
  const [countiesList, setCountiesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const {createUser, keepOpenCreateUser, setHaveFieldsFilled, resetUserCreated } = bindActionCreators(createUserActions, dispapatch);
  const { getAllPlans } = bindActionCreators(plansActions, dispapatch);
  
  const loginState = useSelector((state)=> state.login);
  const plansState = useSelector((state)=> state.plans);
  const createUsers = useSelector((state)=> state.createUsers);

  useEffect(() => {
    handlerChildCloseModal.current = handleCloseModal;
    createtTemporalCountriesList(counties)
    getAllPlans()
  }, [])

  useEffect(()  => {
    if(form.getFieldsError()[0].errors.length > 0 || form.getFieldsError()[1].errors.length > 0 ){
      form.validateFields()
    }  
  }, [form, i18n.language])

  const showConfirmClose = () =>{
    confirm({
      title: `${t("warningModal")}`,
      icon: <ExclamationCircleOutlined />,
      content: `${t("cancelCreationMessage")}`,
      onOk() { handleOk() },
      onCancel() { handleCloseModal() },
      okText:"Ok",
      cancelText:`${t("cancel")}`
    });
  }

  const showSuccessCreation = () => {
    success({
      icon: <CheckCircleFilled />,
      content: `${t("successUserCreation")}`,
      onOk() { 
        keepOpenCreateUser(false);
        setHaveFieldsFilled(false)
        resetUserCreated()
        form.resetFields()
      },
      okText:"Ok",
      cancelButtonProps : { style: { display: 'none' } }, 
    })
  }

  const showErrorCreation = () => {
    error({
      icon: <CloseCircleFilled />,
      content: createUsers.errorMessage,
      onOk() {
        resetUserCreated()
      },
      okText:"Ok",
      cancelButtonProps : { style: { display: 'none' } }, 
    })
  }

  const createtTemporalCountriesList = (counties) => {
    const temporalList = counties.filter(o => filterCountries.includes(o['country_'+i18n.language]))
    setCountiesList(temporalList)
  }

  const onFinish = (values) => {
      const decoded = jwt_decode(loginState.token);
      debugger
      values.parentId = decoded.id;
      values.language = i18n.language;
      values.referrer = decoded.referrer;

      createUser(values)
      handlerMethod()
  };

  const onFieldsChange = (fields, allFields) => {
    let count = 0;
    allFields.map(o=>{
       return count = (o.value === '' || o.value === undefined )? count : count+1 ; 
    })
    
    setHaveFieldsFilled(count > 0)
  }

  const handleOk = () => {
    keepOpenCreateUser(false);
    setOpenWarningModal(false);
    setHaveFieldsFilled(false)
    form.resetFields()
  }

  const handleCloseModal = (refCreateUserState) => {
    
    if(refCreateUserState === undefined) {
      keepOpenCreateUser(true);
      setOpenWarningModal(false);
    }else{

      setOpenWarningModal(refCreateUserState.haveFieldsFilled)
      keepOpenCreateUser(refCreateUserState.haveFieldsFilled)

      if(refCreateUserState.haveFieldsFilled === false){
        form.resetFields()
      }
    }
  }

  const handleCloseModalCancel = () => {
    setOpenWarningModal(createUsers.haveFieldsFilled)
    keepOpenCreateUser(createUsers.haveFieldsFilled)

    if(!createUsers.haveFieldsFilled){
      form.resetFields()
    }
  }

  const selectCity= (e) => {
    setCitiesList(([]) => {
      form.setFieldsValue( { city: undefined } )
      setCitiesList(countiesList.find(o=> o.iso2 === e).cities)
    })
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select showSearch style={{ width: 90 }} placeholder={t("selectPhone")} >
       {prefix.map((o, key)=>{
         return <Option key={key} value={o.prefix}><Flag theme={o.flag}/> {o.prefix}</Option>
       })}
      </Select>
    </Form.Item>
  );
    
  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        onFieldsChange={onFieldsChange}
        initialValues={{
          // residence: ['zhejiang', 'hangzhou', 'xihu'],
          // prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label= {t("name")}
          rules={[{ required: true, message: `${t("errorName")}` , whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastname"
          label={t("lastname")}
          rules={[{ required: true, message: `${t("errorLastname")}`, whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label={t("email")}
          rules={[
            {
              type: 'email',
              message: `${t("errorFormattEmail")}`,
            },
            {
              required: true,
              message: `${t("errorInputEmail")}`,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label={t("password")}
          rules={[
            {
              required: true,
              message: `${t("errorPassword")}`,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label={t("confirmPassword")}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: `${t("errorConfirmPassword")}`,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(`${t("errorPasswordDoNotMatch")}`));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="address"
          label={t("address")}
          rules={[{ required: true, message: `${t("errorAddres")}`, whitespace: true}]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="country"
          label={t("country")}
          rules={[{ required: true, message: `${t("errorAddres")}` }]}
        >
          <Select 
            showSearch
            placeholder={t("selectCountry")} 
            onChange={(value) => selectCity(value) }
          >
          {countiesList.map((o, key) => {
            return <Option key={key} value={o.iso2}>{o['country_'+i18n.language]}</Option>
          })}
          </Select>
        </Form.Item>

        <Form.Item
          name="city"
          label={t("city")}
          rules={[{ required: true, message: `${t("errorCity")}`  }]}
        >
          <Select 
            showSearch
            placeholder={t("selectCity")} 
            disabled= {citiesList && citiesList.length === 0}
          >
          {citiesList && citiesList.map((city, key) => {
            return <Option key={key} value={city}>{city}</Option>
          })}
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label={t("phone")}
          rules={[{ required: true, message: `${t("errorPhone")}` }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="plan"
          label={t("plan")}
          rules={[{ required: true, message: `${t("errorPlan")}`  }]}
        >
          <Select placeholder={t("selectPlan")}>
            {plansState.plans.map((o, key ) => {
              return <Option key={key} value={o.id}>{o.name}</Option>
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="wallet"
          label={t("wallet")}
          rules={[{ required: true, message: `${t("walletError")}`, whitespace: false}]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error( `${t("errorAgreement")}` )),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
          {t("iHaveRead")} <a href="">{t("agreement")}</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
          {t("register")}
          </Button>
          <Button onClick={()=> handleCloseModalCancel()} >
          {t("cancel")}
          </Button>
        </Form.Item>
      </Form>
      {openWarningModal && showConfirmClose()}
      {createUsers.userCreated  && showSuccessCreation()}
      {(!createUsers.userCreated && createUsers.errorMessage !== '' )&& showErrorCreation()}
    </>
  )
}

export default CreateUser

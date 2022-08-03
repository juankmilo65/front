/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { bindActionCreators  } from 'redux'
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch} from 'react-redux'
import { Form, Input, Select, Checkbox, Button, Modal } from 'antd';
import jwt_decode from "jwt-decode";
import { ExclamationCircleOutlined, CheckCircleFilled , CloseCircleFilled } from '@ant-design/icons';

import prefix from './prefix'
import counties from '../../utilities/countriesCities.json'
import {Flag, WrapperAcctionButtons} from './CreateUser.styles'

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
  const location = useLocation();
  const navigate = useNavigate();
 
  const { confirm , success, error} = Modal;
  const [form] = Form.useForm();
  const dispapatch = useDispatch();
 
  const [openWarningModal, setOpenWarningModal] = useState(false)
  const [countiesList, setCountiesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const [isRegister, setIsRegister] = useState(false);
  const {createUser, keepOpenCreateUser, setHaveFieldsFilled, resetUserCreated } = bindActionCreators(createUserActions, dispapatch);
  const { getAllPlans } = bindActionCreators(plansActions, dispapatch);
  
  const loginState = useSelector((state)=> state.login);
  const plansState = useSelector((state)=> state.plans);
  const createUsers = useSelector((state)=> state.createUsers);

  useEffect(() => {
    setIsRegister(location.pathname === '/register');
    handlerChildCloseModal.current = handleCloseModal;
    createtTemporalCountriesList(counties)
    getAllPlans()
  }, [])

  useEffect(()  => {
    if(form.getFieldsError()[0]?.errors?.length > 0 || form.getFieldsError()[1]?.errors?.length > 0 ){
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
      const decoded = isRegister ? null : jwt_decode(loginState.token);
      values.parentId = isRegister ? values.referralCode : decoded.id;
      values.language = i18n.language;

      createUser(values);
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
          label= {isRegister? '': t("name")}
          rules={[{ required: true, message: `${t("errorName")}` , whitespace: true }]}
        >
          <Input placeholder={isRegister? t("name"):''}  />
        </Form.Item>
        <Form.Item
          name="lastname"
          label={isRegister? '': t("lastname")}
          rules={[{ required: true, message: `${t("errorLastname")}`, whitespace: true }]}
        >
          <Input placeholder={isRegister? t("lastname"):''} />
        </Form.Item>
        <Form.Item
          name="email"
          label={isRegister? '': t("email")}
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
          <Input placeholder={isRegister? t("email"):''} />
        </Form.Item>

        <Form.Item
          name="password"
          label={isRegister? '': t("password")}
          rules={[
            {
              required: true,
              message: `${t("errorPassword")}`,
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder={isRegister? t("password"):''}/>
        </Form.Item>

        <Form.Item
          name="confirm"
          label={isRegister? '':  t("confirmPassword")}
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
          <Input.Password placeholder={isRegister? t("confirmPassword"):''}/>
        </Form.Item>

        <Form.Item
          name="address"
          label={isRegister? '': t("address")}
          rules={[{ required: true, message: `${t("errorAddres")}`, whitespace: true}]}
        >
          <Input placeholder={isRegister? t("address"):''} />
        </Form.Item>

        <Form.Item
          name="country"
          label={isRegister ? '': t("country")}
          rules={[{ required: true, message: `${t("errorAddres")}` }]}
          style={isRegister ? { width: '100%' } :{ }}
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
          label={isRegister ? '':t("city")}
          rules={[{ required: true, message: `${t("errorCity")}`  }]}
          style={isRegister ? { width: '100%' } :{ }}
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
          label={isRegister ? '': t("phone")}
          rules={[{ required: true, message: `${t("errorPhone")}` }]}
          style={isRegister ? { width: '100%' } :{ }}
        >
          <Input addonBefore={prefixSelector} placeholder={isRegister? t("phone"): ''} />
        </Form.Item>

        <Form.Item
          name="plan"
          label={isRegister ? '': t("plan")}
          rules={[{ required: true, message: `${t("errorPlan")}`  }]}
          style={isRegister ? { width: '100%' } :{ }}
        >
          <Select placeholder={t("selectPlan")}>
            {plansState.plans.map((o, key ) => {
              return <Option key={key} value={o.Id}>{o.name}</Option>
            })}
          </Select>
        </Form.Item>

        <Form.Item
        name="wallet"
        label={isRegister ? '': t("wallet")}
        rules={[{ required: true, message: `${t("walletError")}`, whitespace: false}]}
        style={isRegister ? { width: '100%' } :{ }}
        >
          <Input placeholder={isRegister? t("wallet"): ''} />
        </Form.Item>

        {isRegister ? 
         <Form.Item
         name="referralCode"
         rules={[{ required: true, message: `${t("referralCodeError")}`, whitespace: false}]}
         style={isRegister ? { width: '100%' } :{ }}
         >
           <Input placeholder={t("referralCode")} />
         </Form.Item> 
         :
         null}
        
        <div className='footerButtoms' >
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
            <WrapperAcctionButtons isRegister={isRegister}>
              <Button type="primary" htmlType="submit">
              {t("register")}
              </Button>
              <Button onClick={()=> isRegister ? navigate('/') : handleCloseModalCancel() } >
                {isRegister ? t("goBack") : t("cancel")}
              </Button>
            </WrapperAcctionButtons>
          </Form.Item>
        </div>
      </Form>
      {openWarningModal && showConfirmClose()}
      {createUsers.userCreated  && showSuccessCreation()}
      {(!createUsers.userCreated && createUsers.errorMessage !== '' ) && showErrorCreation()}
      {createUsers.userCreated && handlerMethod()}
    </>
  )
}

export default memo(CreateUser)

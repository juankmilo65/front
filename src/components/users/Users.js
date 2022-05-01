/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import { bindActionCreators  } from 'redux'
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch} from 'react-redux'
import { Table, Badge, Menu, Dropdown, Space, Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import jwt_decode from "jwt-decode";

import userActions from './userActions'

const menu = (<Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
    </Menu>
    );

function Users() {
  
    const {t} = useTranslation(['users']);
    const dispapatch = useDispatch();
    const userState = useSelector((state)=> state.users);
    const loginState = useSelector((state)=> state.login);

    const {getUserChildrenByFatherId } = bindActionCreators(userActions, dispapatch)

    useEffect(()  => {
      const decoded = jwt_decode(loginState.token);
      getUserChildrenByFatherId(decoded.id)
    }, [loginState.token])

    const expandedRowRender = () => {
        const columns = [
          { title: 'Date', dataIndex: 'date', key: 'date' },
          { title: 'Name', dataIndex: 'name', key: 'name' },
          {
            title: 'Status',
            key: 'state',
            render: () => (
              <span>
                <Badge status="success" />
                Finished
              </span>
            ),
          },
          { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
          {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
              <Space size="middle">
                <a>Pause</a>
                <a>Stop</a>
                <Dropdown overlay={menu}>
                  <a>
                    More <DownOutlined />
                  </a>
                </Dropdown>
              </Space>
            ),
          },
        ];
    
        const data = [];
        for (let i = 0; i < 3; ++i) {
          data.push({
            key: i,
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
          });
        }
        return <Table columns={columns} dataSource={data} pagination={false} />;
      };
    
      const columns = [
        { title: t("name"), dataIndex: 'name', key: 'name' },
        { title: t("lastname"), dataIndex: 'lastname', key: 'lastname' },
        { title: t("status"), dataIndex: 'status', key: 'status',
          render: text => {
            return <Checkbox disabled={true} checked={text}>{text ? 'Actived': 'Disabled'}</Checkbox>;
          }, 
        },
        { title: t("createdAt"), dataIndex: 'createdAt', key: 'createdAt' },
        { title: t("updatedAt"), dataIndex: 'updatedAt', key: 'updatedAt' },
        { title: t("action"), key: 'operation', render: () => <a>Publish</a> },
      ];
    
  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={userState.usersByFather}
    />
  )
}

export default Users

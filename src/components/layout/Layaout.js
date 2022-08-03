import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from "react-router-dom";
import { Menu, Layout, Popover} from 'antd';
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, TeamOutlined, UserSwitchOutlined } from '@ant-design/icons';
import jwt_decode from "jwt-decode";
import { useTranslation } from "react-i18next"

import {Logo, Avatar } from './Layaout.styles';
import './layaout.css';
import Footer from '../footer/Footer';
import Dashboard from '../dashboard/Dashboard';
import Statistics from '../statistics/Statistics';
import Users from '../users/Users';
import Roles from '../roles/Roles';
import Error from '../error/Error';
import MenuPopover from '../menuPopover/MenuPopover';

const { Header, Content, Sider } = Layout;

const { SubMenu } = Menu;

function Layaout() {
    const location = useLocation();
    const {t} = useTranslation(['layout'])
    const [collapsed, setCollapsed] = useState(false);  
    const toggleCollapsed = () => setCollapsed(!collapsed);
    const state = useSelector((state)=> state.login)

    const decoded = jwt_decode(state.token);
    const userName =  `${decoded.name} ${decoded.lastname}` 

    const renderComponent = component => {
        const RENDER_COMPONENT = {
            dashboard: () => <Dashboard/> ,
            users: () => <Users/>,
            statistics: () => <Statistics/>,
            roles: () => <Roles/>,
            error: () => <Error/>
        };

        return RENDER_COMPONENT[component]();
      };

    return (
        <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible collapsed={collapsed} onCollapse={toggleCollapsed}
                        style={{
                        overflow: 'auto',
                        height: '100vh',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        position: 'sticky',      
                        background: 'linear-gradient(to right, #2a0845, #59359D)'
                    }}
                    >
                    <Logo/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{  background: 'linear-gradient(to right, #2a0845, #59359D)'}}>
                        <Menu.Item key="1" icon={<DesktopOutlined />}>
                            <Link  to='/dashboard'>
                                {t("dashboard")}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<TeamOutlined />}> 
                            <Link  to='/users'>
                                {t("myDenarios")} 
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<PieChartOutlined />}>
                            <Link  to='/statistics'>
                                {t("statistics")}  
                            </Link> 
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserSwitchOutlined />}>
                            <Link  to='/roles'>
                                {t("roles")}  
                            </Link> 
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<ContainerOutlined />} title={t("reports")}>
                            <Menu.Item key="5">{t("myDenarios")} </Menu.Item>
                            <Menu.Item key="6">{t("donations")}</Menu.Item>     
                        </SubMenu>
                    </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{background: '#e4d7ea'}}>
                    <Header className="site-layout-background" style={{ zIndex: 1, display:'flex', justifyContent: 'right', position: 'sticky', top:0, color:'white', padding: 0,  background: 'linear-gradient(to right, #4C2C89, #2a0845)'}} >
                        <div>{t("welcome")} {userName}</div>
                        <Popover placement="bottomRight" content={<MenuPopover/>} trigger="click">
                            <Avatar/>
                        </Popover>
                    </Header>
                    <Content style={{ margin: '16px 16px 16px', padding: '25px', background:'white' }}>
                        {renderComponent(location.pathname.replace('/',''))}
                    </Content>
                    <Footer/>
                    </Layout>
        </Layout>
    )
}

export default memo(Layaout)
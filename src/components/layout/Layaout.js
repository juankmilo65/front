import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Menu, Layout} from 'antd';
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons';

import {Logo, Avatar } from './Layaout.styles';
import './layaout.css'

import Dashboard from '../dashboard/Dashboard'
import Users from '../users/Users';
import Error from '../error/Error'

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

function Layaout() {
    const [collapsed, setCollapsed] = useState(false);
    const [user ] = useState('test');

    const toggleCollapsed = () => setCollapsed(!collapsed);

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
                            <Link  to='/Dashboard'>
                                Dashboard
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<TeamOutlined />}> 
                            <Link  to='/users'>
                                Mis Denarios 
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<PieChartOutlined />}> Estadisticas </Menu.Item>
                        <SubMenu key="sub1" icon={<ContainerOutlined />} title="Reportes">
                            <Menu.Item key="5">Mis Denarios</Menu.Item>
                            <Menu.Item key="6">Donaciones</Menu.Item>     
                        </SubMenu>
                        <Menu.Item key="7" icon={<MailOutlined />} > Email  </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{background: '#e4d7ea'}}>
                    <Header className="site-layout-background" style={{ zIndex: 1, display:'flex', justifyContent: 'right', position: 'sticky', top:0, color:'white', padding: 0,  background: 'linear-gradient(to right, #4C2C89, #2a0845)'}} >
                        <div>Bienvenido {user}</div>
                        <Avatar/>
                    </Header>
                    <Content style={{ margin: '16px 16px 16px', padding: '25px', background:'white' }}>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard/>} />
                            <Route path="/users" element={<Users/>} />
                            <Route path="*" element={<Error/>} />
                        </Routes>
                    </Content>
                    <Footer style={{ textAlign: 'center', color:'white', background: 'linear-gradient(to right, #4C2C89, #2a0845)' }}>Denario Pro ©2022</Footer>
                    </Layout>
        </Layout>
    )
}

export default Layaout
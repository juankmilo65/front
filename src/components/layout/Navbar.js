import React, { useState } from 'react'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row , Image} from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    TeamOutlined 
  } from '@ant-design/icons';

import {Logo, Avatar, WrapLayaoutContent, WrapLayaout, WrapperContent } from './Navbar.styles';
import './layaout.css'

const { SubMenu } = Menu;

function NavBar() {
    const rootSubmenuKeys = ['sub1'];
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState();
    const [user, setUser] = useState('test');

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const toggleCollapsed = () => setCollapsed(!collapsed);
    
    return (
        <WrapLayaout>
            <Menu
                style={{ width: 256, position:'fixed', height: "100vh" }}
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}>
                <Logo/>
                
                <Menu.Item key="1" icon={<DesktopOutlined />}>
                            Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<TeamOutlined />}>
                            Mis Denarios
                </Menu.Item>
                <Menu.Item key="3" icon={<PieChartOutlined />}>
                            Estadisticas
                </Menu.Item>
                <SubMenu key="sub1" icon={<ContainerOutlined />} title="Reportes">
                    <Menu.Item key="5">Mis Denarios</Menu.Item>
                    <Menu.Item key="6">Donaciones</Menu.Item>     
                </SubMenu>
                <Menu.Item key="7" icon={<MailOutlined />} >
                      Email     
                </Menu.Item>
            </Menu>
            <WrapLayaoutContent>
                <PageHeader
                    className="site-page-header header"
                    title="Title"
                    subTitle="This is a subtitle"
                    extra={[
                    <div>Bienvenido {user}</div>,
                    <Avatar/>
                    ]}
                />
                <WrapperContent>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                </WrapperContent>
            </WrapLayaoutContent>
        </WrapLayaout>
    )
}

export default NavBar
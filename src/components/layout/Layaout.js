import React, { useState } from 'react'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row , Image, Layout} from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  } from '@ant-design/icons';

import {Logo, Avatar, WrapLayaoutContent, WrapLayaout, WrapperContent } from './Layaout.styles';
import './layaout.css'

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

function Layaout() {
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
        <Layout hasSider>
    <Sider
    collapsible collapsed={collapsed} onCollapse={toggleCollapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Logo/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          nav 4
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          nav 8
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
        // <WrapLayaout>
        //     <Menu
        //         style={{ width: 256, position:'fixed', height: "100vh" }}
        //         defaultSelectedKeys={['1']}
        //         mode="inline"
        //         theme="dark"
        //         inlineCollapsed={collapsed}>
        //         <Logo/>
                
        //         <Menu.Item key="1" icon={<DesktopOutlined />}>
        //                     Dashboard
        //         </Menu.Item>
        //         <Menu.Item key="2" icon={<TeamOutlined />}>
        //                     Mis Denarios
        //         </Menu.Item>
        //         <Menu.Item key="3" icon={<PieChartOutlined />}>
        //                     Estadisticas
        //         </Menu.Item>
        //         <SubMenu key="sub1" icon={<ContainerOutlined />} title="Reportes">
        //             <Menu.Item key="5">Mis Denarios</Menu.Item>
        //             <Menu.Item key="6">Donaciones</Menu.Item>     
        //         </SubMenu>
        //         <Menu.Item key="7" icon={<MailOutlined />} >
        //               Email     
        //         </Menu.Item>
        //     </Menu>
        //     <WrapLayaoutContent>
        //         <PageHeader
        //             className="site-page-header header"
        //             title="Title"
        //             subTitle="This is a subtitle"
        //             extra={[
        //             <div>Bienvenido {user}</div>,
        //             <Avatar/>
        //             ]}
        //         />
        //         <WrapperContent>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //             <div>Content</div>
        //         </WrapperContent>
        //     </WrapLayaoutContent>
        // </WrapLayaout>
    )
}

export default Layaout
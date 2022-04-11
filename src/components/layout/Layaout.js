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
    const [WithLayout, setWithLayout] = useState({})
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
        <Menu.Item key="1" icon={<DesktopOutlined />}>Dashboard</Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}> Mis Denarios </Menu.Item>
        <Menu.Item key="3" icon={<PieChartOutlined />}> Estadisticas </Menu.Item>
        <SubMenu key="sub1" icon={<ContainerOutlined />} title="Reportes">
            <Menu.Item key="5">Mis Denarios</Menu.Item>
            <Menu.Item key="6">Donaciones</Menu.Item>     
        </SubMenu>
        <Menu.Item key="7" icon={<MailOutlined />} > Email  </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{background: '#e4d7ea'}}>
      <Header className="site-layout-background" style={{ display:'flex', justifyContent: 'right', position: 'sticky', top:0, color:'white', padding: 0,  background: 'linear-gradient(to right, #4C2C89, #2a0845)'}} >
          <div>Bienvenido {user}</div>
          <Avatar/>
      </Header>
      <Content style={{ margin: '16px 16px 16px', background:'white' }}>
        <div>
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
      <Footer style={{ textAlign: 'center', color:'white', background: 'linear-gradient(to right, #4C2C89, #2a0845)' }}>Denario Pro ©2022</Footer>
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
                
        
        //         
       
        
       
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
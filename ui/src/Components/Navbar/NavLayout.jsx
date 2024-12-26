import React from 'react';
import { LoginOutlined, UpCircleFilled  } from '@ant-design/icons';
import { Button, Layout, Menu, message } from 'antd';
import { configSidebarItems } from './configSidebarItems';
import { NavLink, useNavigate } from 'react-router'; // Use react-router-dom for NavLink
import axiosInstance from '../../util/axiosInstance';

const { Header, Content, Sider } = Layout;

const userInfo = JSON.parse(localStorage.getItem('userInfo'));


const generateMenuItems = (role) => {
  const roleConfig = configSidebarItems[role] || []; 
  return roleConfig.map((item) => ({
    key: item.key,
    icon: React.createElement(item.icon),
    label: <NavLink to={item.path}>{item.label}</NavLink>,
  }));
};

const NavLayout = ({ children }) => {
  const menuItems = generateMenuItems(userInfo.role);

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogout = async () => {
      try {
        await axiosInstance.post('/auth/logout'); 
  
        localStorage.removeItem('userInfo');
        messageApi.success('Logged out successfully');
        navigate('/login');
      } catch (error) {
        messageApi.error('Logout failed, please try again');
      }
  };

  return (
    <Layout>
      {contextHolder}
      <Header
        style={{
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ color: '#808080' }}> <UpCircleFilled /> Bindass Towers</h1>
        <div>
          <h3 style={{ color: '#808080', fontWeight: 'lighter' }}>
            Welcome! {userInfo.firstName}
            <Button style={{ marginLeft: '10px' }} color="default" variant="dashed" onClick={handleLogout}>
            <LoginOutlined/>
          </Button>
          </h3>
        </div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['home']} 
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={menuItems}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 8,
              margin: 0,
              minHeight: '90vh',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default NavLayout;

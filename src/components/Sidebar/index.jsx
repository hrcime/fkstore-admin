import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import styled from 'styled-components';
import {
  DesktopOutlined,
  UserOutlined
} from '@ant-design/icons';
const { Title } = Typography;

const Logo = styled.div`
  height: 32px;
  margin: 16px;
`;

const { Sider } = Layout;

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Sider collapsible collapsed={collapse} onCollapse={setCollapse} theme="light">
      <Logo>
        <Title level={4}>Admin Area</Title>
      </Logo>
      <Menu theme="light" defaultSelectedKeys={['2']} mode="vertical">
        <Menu.Item key='1' icon={<DesktopOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined />}>
          User
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
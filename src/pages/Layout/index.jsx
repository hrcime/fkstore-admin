import React from 'react';
import styled from 'styled-components';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import Sidebar from '../../components/Sidebar';
import routes from '../../constant/routes';

import './style.scss';

const { Header, Content, Footer } = Layout;
const LayoutWrapper = styled.div`
  min-height: 360px;
  padding-top: 12px;
`;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className='site-layout'>
          <Header className='site-layout-header-background' style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <LayoutWrapper>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </LayoutWrapper>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Harichiu</Footer>
        </Layout>
      </Layout>
    );
}
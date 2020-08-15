import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { Row, Col, Card, Table } from 'antd';

const GET_USERS = gql`
  query getUser{
    getUser{
      id
      firstName
      lastName
    }
  }
`;

const columns = [
  {
    title: 'ID',
    width: 50,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: 'First Name',
    width: 100,
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    width: 100,
    dataIndex: 'lastName',
    key: 'lastName',
  }
];

const User = () => {
  const [data, setData] = useState([]);
  const [getUser, { loading, error }] = useLazyQuery(GET_USERS, {
    fetchPolicy: 'network-only',
    onCompleted: (res) => {
      setData(res.getUser);
    }
  });

  useEffect(() => {
    getUser();
  }, [])

  return (
    <>
      <Row>
        <Col span={24}>
          <Card loading={loading}>
            <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 500 }} />
          </Card>
        </Col>
      </Row>
    </>
  )
};

export default User;
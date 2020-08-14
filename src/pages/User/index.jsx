import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query getUser{
    getUser{
      id
      firstName
      lastName
    }
  }
`;

const User = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only'
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div>{JSON.stringify(data)}</div>
  )
};
export default User;
import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_USER } from './gql';
import { IUserData, IUser } from './types/interface';

function Main() {
  const { loading, error, data } = useQuery<IUserData>(GET_ALL_USER);

  if (loading) return null;

  if (error) {
    return (
      <>
        <div>Error</div>
        <div>{error.message}</div>
      </>
    );
  }

  return (
    <div>
      <div>Main View</div>
      {data?.getAllUser?.map((user: IUser) => (
        <div style={{ display: 'flex', margin: 10 }} key={user.id}>
          <span style={{ marginRight: 20 }}>id: {user.id}</span>
          <span style={{ marginRight: 20 }}>name: {user.name}</span>
          <span style={{ marginRight: 20 }}>E-Mail: {user.email}</span>
        </div>
      ))}
    </div>
  );
}

export default Main;

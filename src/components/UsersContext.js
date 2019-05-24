import React, { useState, createContext } from 'react';
import defaultState from '../default-state';

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [users, setUsers] = useState(defaultState.users);

  const createUser = user => {
    setUsers([...users, { ...user, id: Date.now().toString() }]);
  };

  const updateUser = targetUser => {
    setUsers(users.map(user => {
      if (user.id === targetUser.id) {
        return { ...user, name: targetUser.name };
      }
      return user;
    }));
  };

  return (
    <UsersContext.Provider value={{ users, createUser, updateUser }}>
      {props.children}
    </UsersContext.Provider>
  )
}

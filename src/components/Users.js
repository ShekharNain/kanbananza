import React from 'react';

import CreateUser from './CreateUser';
import User from './User';
import withUsers from './withUsers';

const Users = ({ users = [], createUser, updateUser }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser onCreateUser={createUser} />
      {users.map((user) => (
        <User key={user.id} user={user} onUpdateUser={updateUser} />
      ))}
    </section>
  );
};

export default withUsers(Users);

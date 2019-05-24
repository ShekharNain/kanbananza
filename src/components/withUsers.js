import React, { Component } from 'react';
import { users } from '../default-state.json';

const withUsers = (WrappedComponent) => {
  return class extends Component {
    state = { users };

    createUser = user => {
      const { users } = this.state;
      this.setState({
        users: [...users, { ...user, id: Date.now().toString() }]
      });
    };

    updateUser = targetUser => {
      let { users } = this.state;

      users = users.map(user => {
        if (user.id === targetUser.id) {
          return { ...user, name: targetUser.name };
        }
        return user;
      });

      this.setState({ users });
    };

    render() {
      const { users } = this.state;

      return (
        <WrappedComponent
          users={users}
          createUser={this.createUser}
          updateUser={this.updateUser}
          {...this.props}
        />
      );
    }
  };
}

export default withUsers;

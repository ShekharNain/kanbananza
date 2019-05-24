import { EventEmitter } from 'events';
import { users } from './default-state.json';

class UserStore extends EventEmitter {
  users = users;

  createUser = user => {
    this.users = [...this.users, { ...user, id: Date.now().toString() }];
    this.emit('change', this.users);
  };

  updateUser = targetUser => {
    this.users = this.users.map(user => {
      if (user.id === targetUser.id) {
        return { ...user, name: targetUser.name };
      }
      return user;
    });

    this.emit('change', this.users);
  };
}

export default new UserStore();

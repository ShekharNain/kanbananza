import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';
import Users from './Users';

import defaultState from '../default-state.json';

class Application extends Component {
  state = defaultState;

  createList = ({ title }) => {
    const { lists } = this.state;

    const list = {
      cards: [],
      id: Date.now().toString(),
      title
    };

    this.setState({ lists: [...lists, list] });
  };

  removeList = listId => {
    let { lists } = this.state;

    lists = lists.filter(list => list.id !== listId);

    this.setState({ lists });
  };

  createCard = (listId, { title, description }) => {
    let { lists } = this.state;
    const card = { id: Date.now().toString(), title, description };

    lists = lists.map(list => {
      if (list.id === listId) {
        return { ...list, cards: [...list.cards, card] };
      }
      return list;
    });

    this.setState({ lists });
  };

  removeCard = (listId, cardId) => {
    let { lists } = this.state;

    const targetList = lists.find(list => listId === list.id);

    const remainingCards = targetList.cards.filter(({ id }) => id !== cardId);
    const updatedList = { ...targetList, cards: remainingCards };

    lists = lists.map(list => {
      return list.id === listId ? updatedList : list;
    });

    this.setState({ lists });
  };

  moveCardToList = (targetCard, newListId) => {
    let { lists } = this.state;

    lists = lists.map(list => {
      let newCards;
      if (list.id === newListId) {
        newCards = [...list.cards, targetCard];
      } else {
        newCards = list.cards.filter(card => card.id !== targetCard.id);
      }
      return { ...list, cards: newCards };
    });

    return this.setState({ lists });
  };

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

  assignCard = (targetCard, targetUserId) => {
    let { lists, users } = this.state;

    lists = lists.map(list => {
      if (!list.cards.includes(targetCard)) {
        return list;
      }

      const cards = list.cards.map(card => {
        if (card.id === targetCard.id) {
          if (!targetUserId) return { ...card, assignedTo: '' };
          return { ...card, assignedTo: targetUserId };
        }
        return card;
      });

      return { ...list, cards };
    });

    this.setState({ lists });
  };

  render() {
    const { lists, users } = this.state;

    return (
      <main className="Application">
        <Users
          users={users}
          onCreateUser={this.createUser}
          onUpdateUser={this.updateUser}
        />
        <section>
          <CreateList onCreateList={this.createList} />
          <Lists
            lists={lists}
            users={users}
            onAssignCard={this.assignCard}
            onCreateCard={this.createCard}
            onRemoveList={this.removeList}
            onRemoveCard={this.removeCard}
            onMoveCardToList={this.moveCardToList}
          />
        </section>
      </main>
    );
  }
}

export default Application;

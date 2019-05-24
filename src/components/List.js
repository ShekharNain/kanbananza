import React, { Component } from 'react';

import CreateCard from './CreateCard';
import Card from './Card';

class List extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState(prevState => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  createCard = (card) => {
    const { list, onCreateCard } = this.props;
    if (onCreateCard) onCreateCard(list.id, card);
  };

  removeList = () => {
    const { list, onRemoveList } = this.props;

    if (onRemoveList) {
      onRemoveList(list.id);
    }
  };

  render() {
    const { list = {}, onRemoveCard } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="List">
        <h2>{list.title}</h2>
        {showOptions && (
          <div className="List-options">
            <CreateCard onCreateCard={this.createCard} />
            <button className="List-remove danger" onClick={this.removeList}>
              Remove List
            </button>
          </div>
        )}
        <button
          className="List-toggle toggle-options"
          onClick={this.toggleOptions}
        >
          Toggle Options
        </button>
        <div>
          {list.cards.map(card => (
            <Card
              key={card.id}
              card={card}
              onRemoveCard={onRemoveCard}
              listId={list.id}
            />
          ))}
        </div>
      </article>
    );
  }
}

export default List;

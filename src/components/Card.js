import React, { Component } from 'react';
import CardAssignment from './CardAssignment';

class Card extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState((prevState) => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  moveCardToList = (event) => {
    const listId = event.target.value;
    const { card, onMoveCardToList } = this.props;

    if (onMoveCardToList) onMoveCardToList(card, listId);
  };

  render() {
    const {
      card,
      listId,
      lists = [],
      onAssignCard,
      onRemoveCard = () => {},
    } = this.props;
    const { showOptions } = this.state;
    const removeCard = () => onRemoveCard(listId, card.id);

    return (
      <article className="Card">
        <h3>{card.title}</h3>
        <div className="Card-description">{card.description}</div>
        {showOptions && (
          <div className="Card-options">
            <select
              className="Card-move"
              onChange={this.moveCardToList}
              value={listId}
            >
              {lists.map((list) => (
                <option value={list.id} key={list.id}>
                  {list.title}
                </option>
              ))}
            </select>
            <button onClick={removeCard} className="Card-remove danger">
              Remove Card
            </button>
          </div>
        )}
        <CardAssignment card={card} onAssignCard={onAssignCard} />
        <button className="Card-toggle" onClick={this.toggleOptions}>
          Toggle Options
        </button>
      </article>
    );
  }
}

export default Card;

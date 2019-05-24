import React, { useState, createContext } from 'react';
import defaultState from '../default-state';

export const ListsContext = createContext();

export const ListsProvider = props => {
  const [lists, setLists] = useState(defaultState.lists);

  const createList = ({ title }) => {
    const list = {
      cards: [],
      id: Date.now().toString(),
      title
    };

    setLists([...lists, list]);
  };

  const removeList = listId => {
    let { lists } = this.state;

    const updatedLists = lists.filter(list => list.id !== listId);

    setLists(updatedLists);
  };

  const createCard = (listId, { title, description }) => {
    const card = { id: Date.now().toString(), title, description };

    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        return { ...list, cards: [...list.cards, card] };
      }
      return list;
    });

    setLists(updatedLists);
  };

  const removeCard = (listId, cardId) => {
    const targetList = lists.find(list => listId === list.id);

    const remainingCards = targetList.cards.filter(({ id }) => id !== cardId);
    const updatedList = { ...targetList, cards: remainingCards };

    const updatedLists = lists.map(list => {
      return list.id === listId ? updatedList : list;
    });

    setLists(lists);
  };

  const moveCardToList = (targetCard, newListId) => {
    console.log('MoveCardToList', targetCard, newListId);
    const updatedLists = lists.map(list => {
      let newCards;
      if (list.id === newListId) {
        newCards = [...list.cards, targetCard];
      } else {
        newCards = list.cards.filter(card => card.id !== targetCard.id);
      }
      return { ...list, cards: newCards };
    });

    return setLists(updatedLists);
  };

  const assignCard = (targetCard, targetUserId) => {
    const updatedLists = lists.map(list => {
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

    setLists(updatedLists);
  };

  return (
    <ListsContext.Provider
      value={{
        lists,
        createList,
        removeList,
        createCard,
        removeCard,
        assignCard,
        moveCardToList
      }}
    >
      {props.children}
    </ListsContext.Provider>
  );
};

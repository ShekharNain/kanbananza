import React from 'react';
import List from './List';

const Lists = ({
  lists = [],
  onRemoveList,
  onRemoveCard,
  onCreateCard,
  onMoveCardToList
}) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          list={list}
          lists={lists}
          key={list.id}
          onCreateCard={onCreateCard}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
          onMoveCardToList={onMoveCardToList}
        />
      ))}
    </section>
  );
};

export default Lists;

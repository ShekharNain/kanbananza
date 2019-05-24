import React from 'react';
import List from './List';

const Lists = ({
  lists = [],
  onAssignCard,
  onRemoveList,
  onRemoveCard,
  onCreateCard,
  onMoveCardToList,
}) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          list={list}
          lists={lists}
          key={list.id}
          onAssignCard={onAssignCard}
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

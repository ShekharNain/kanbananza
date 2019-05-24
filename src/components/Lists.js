import React from 'react';
import List from './List';

const Lists = ({ lists = [], onRemoveList, onRemoveCard, onCreateCard }) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          list={list}
          key={list.id}
          onCreateCard={onCreateCard}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
        />
      ))}
    </section>
  );
};

export default Lists;

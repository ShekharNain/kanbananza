import React from 'react';
import withUsers from './withUsers';

const CardAssignment = ({
  card = {},
  users = [],
  onAssignCard = () => {},
}) => {
  const handleChange = (event) => {
    const userId = event.target.value;

    if (onAssignCard) onAssignCard(card, userId);
  };

  const owner = users.find(user => user.id === card.assignedTo);

  return (
    <div className="CardAssignment" style={{ fontSize: '0.8em' }}>
      {owner ? (
        <p>
          Card assigned to <strong>{owner.name}</strong>.
        </p>
      ) : (
        <p>Card unassigned.</p>
      )}
      <select value={card.assignedTo} onChange={handleChange}>
        <option value="">(Unassigned)</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default withUsers(CardAssignment);

import React from 'react';

const UserCard = ({ name, email, isPremium }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>{name}</h3>
      <p>{email}</p>
      {isPremium && <span style={{ color: 'gold' }}>⭐ Premium User</span>}
    </div>
  );
};

export default UserCard;

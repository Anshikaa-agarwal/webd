import React from 'react';
import UserCard from './components/UserCard';

const App = () => {
  return (
    <div>
      <UserCard name="Anshika Agarwal" email="anshika@example.com" isPremium={true} />
      <UserCard name="Rahul Sharma" email="rahul@example.com" isPremium={false} />
    </div>
  );
};

export default App;

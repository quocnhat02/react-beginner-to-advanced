import React from 'react';
import User from './User';

const HelloWorld = () => {
  return (
    <div>
      <h1>List of Users</h1>
      <User />
      <User name="John" job="Cleaner" />
      <User name="Sarah" job="Baker" />
    </div>
  );
};

export default HelloWorld;

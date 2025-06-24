import React from 'react';

function Welcome({ name, location }) {
  return (
    <div className="welcome">
      <h2>Hello, {name} from {location}! Welcome to our platform.</h2>
    </div>
  );
}

export default Welcome;
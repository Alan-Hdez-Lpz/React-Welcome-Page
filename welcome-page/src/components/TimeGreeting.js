import React from 'react';

function TimeGreeting() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning!';
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good Afternoon!';
  } else if (currentHour >= 17 && currentHour < 22) {
    greeting = 'Good Evening!';
  } else {
    greeting = 'Good Night!';
  }

  return <h3>{greeting}</h3>;
}

export default TimeGreeting;

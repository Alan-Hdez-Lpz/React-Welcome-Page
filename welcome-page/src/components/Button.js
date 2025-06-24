import React from 'react';

function Button({ text, onClick, style }) {
  return (
    <button className="custom-button" onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default Button;

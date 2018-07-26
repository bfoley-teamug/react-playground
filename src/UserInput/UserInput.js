import React from 'react';

//this is stateless, so go with basic ES6 function
//return an input element

const userInput = (props) => {
  const inputStyle = {
    border: '2px sold black',
    margin: '8px'
  };

  return <input
            type="text"
            style={inputStyle}
            onChange={props.changed}
            value={props.currentName}
          />
};

export default userInput;

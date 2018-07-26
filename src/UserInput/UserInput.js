import React from 'react';

//this is stateless, so go with basic ES6 function
//return an input element

const userInput = (props) => {
  return <input type="text" onChange={props.changed} />
};

export default userInput;

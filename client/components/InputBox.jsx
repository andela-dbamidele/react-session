import React from 'react';

const InputBox = (props) => {
  return (
    <input
      type="text"
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      className={props.className} />
  );
};

export default InputBox;
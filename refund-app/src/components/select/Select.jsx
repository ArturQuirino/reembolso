import React from 'react';
import './Select.css';

const Select = (props) => {
  return (
    <select {...props} className={'select ' + props.className}>
      {props.children}
    </select>
  );
};

export default Select;

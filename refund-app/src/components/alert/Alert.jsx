import React, { Component } from 'react';
import './Alert.css';

const Alert = (props) => {
  return (
    <div {...props} className={'alert'}>
      {props.children}
    </div>
  );
};

export default Alert;

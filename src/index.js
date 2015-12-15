import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './Component';

window.onload = () => {
  ReactDOM.render(
    <Converter />,
    document.querySelector('#container')
  );
};

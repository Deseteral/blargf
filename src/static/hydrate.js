/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';
import React from 'react';
import Index from '../components/Index';

async function hydrate() {
  const props = await (await fetch('/data')).json();

  ReactDOM.hydrate(
    <Index {...props} />, // eslint-disable-line react/jsx-props-no-spreading
    document.getElementById('app'),
  );
}

export default hydrate;

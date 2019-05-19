import ReactDOM from 'react-dom';
import React from 'react';
import Index from '../components/Index';

async function hydrate() {
  const data = await (await fetch('/data')).json();

  ReactDOM.hydrate(
    <Index data={data} />, // eslint-disable-line react/jsx-filename-extension
    document.querySelector('#app'),
  );
}

export default hydrate;

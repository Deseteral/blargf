/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';
import React from 'react';
import PageRoot from '../application/components/PageRoot';

async function hydrate(): Promise<void> {
  const props = await (await fetch('/data')).json();

  ReactDOM.hydrate(
    <PageRoot {...props} />, // eslint-disable-line react/jsx-props-no-spreading
    document.getElementById('app'),
  );
}

export default hydrate;

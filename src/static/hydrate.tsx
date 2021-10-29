/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';
import React from 'react';
import PageRoot from '../application/components/PageRoot';

async function hydrate(): Promise<void> {
  const data = await (await fetch('/data')).json();

  ReactDOM.hydrate(
    <PageRoot data={data} />,
    document.getElementById('app'),
  );
}

export default hydrate;

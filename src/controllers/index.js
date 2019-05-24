/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { performance } from 'perf_hooks';
import signale from 'signale';
import ReactDOMServer from 'react-dom/server';
import Index from '../components/Index';
import getData from '../services/data-service';

function render() {
  const data = getData();

  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(<Index data={data} />),
  );

  return sheet.getStyleTags() + html;
}

function indexController(req, res) {
  const timeStart = performance.now();
  const html = render();
  const renderTime = (performance.now() - timeStart);

  res.send(html);

  signale.info(`Render took ${renderTime} ms`);
}

export default indexController;

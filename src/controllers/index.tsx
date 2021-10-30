/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { performance } from 'perf_hooks';
import signale from 'signale';
import PageRoot from '../domain/page-root/PageRoot';
import getData from '../services/data-service';

const indexController = express.Router();

function render(): string {
  const data = getData();

  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(<PageRoot data={data} />),
  );

  return sheet.getStyleTags() + html;
}

indexController.get('/', (_, res) => {
  const timeStart = performance.now();
  const html = render();
  const renderTime = (performance.now() - timeStart);

  res.set('Server-Timing', `render;dur=${renderTime};desc="Render"`);
  res.send(html);

  signale.info(`Render took ${renderTime} ms`);
});

export default indexController;

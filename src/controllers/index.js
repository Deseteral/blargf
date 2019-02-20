/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { performance } from 'perf_hooks';
import signale from 'signale';
import ReactDOMServer from 'react-dom/server';
import Index from '../components/Index';
import { getBackgroundImage } from '../services/reddit-images';
import { getTasks } from '../services/tasks';
import { getUpcomingEvents } from '../services/upcoming-events';
import { getPudeukoData } from '../services/pudeuko';
import { getCountdownsData } from '../services/countdowns';

function render() {
  const context = {
    imageData: getBackgroundImage(),
    tasks: getTasks(),
    upcomingEvents: getUpcomingEvents(),
    pudeuko: getPudeukoData(),
    countdowns: getCountdownsData(),
  };

  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(<Index context={context} />),
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

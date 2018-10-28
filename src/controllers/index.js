/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderStylesToString } from 'emotion-server';
import { performance } from 'perf_hooks';
import signale from 'signale';
import ReactDOMServer from 'react-dom/server';
import Index from '../components/Index';
import getBackgroundImage from '../services/reddit-images';
import getTasks from '../services/tasks';
import getUpcomingEvents from '../services/upcoming-events';

function render() {
  const context = {
    imageData: getBackgroundImage(),
    tasks: getTasks(),
    upcomingEvents: getUpcomingEvents(),
  };

  return renderStylesToString(ReactDOMServer.renderToStaticMarkup(<Index context={context} />));
}

function indexController(req, res) {
  const timeStart = performance.now();
  const html = render();
  const renderTime = (performance.now() - timeStart);

  res.send(html);

  signale.info(`Render took ${renderTime} ms`);
}

export default indexController;

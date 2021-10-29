import path from 'path';
import signale from 'signale';

interface Configuration {
  server: {
    port: number,
  },
  'backgrounds': {
    'subreddits': string[],
  },
  'tasks': {
    'todoist_token': string,
    'refresh_interval_seconds': number
  },
  'events': {
    'ical_urls': string[],
    'refresh_interval_seconds': number
  },
  'pudeuko': {
    'dropbox_token': string,
    'service_url': string,
    'refresh_interval_seconds': number
  },
  'countdowns': {
    'list': ({ title: string, date: string })[],
    'refresh_interval_seconds': number,
  },
  'alert_banner': {
    'refresh_interval_seconds': number,
  }
}

const configPath = path.join(__dirname, '..', 'config.json');
let configData: Configuration;

function reloadConfiguration(): void {
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    configData = require(configPath);
  } catch (exception) {
    signale.fatal('Could not reload configuration');
    signale.fatal(exception);
    process.exit(1);
  }

  signale.success('Reloaded configuration');
}

function config(): Configuration {
  return configData;
}

(function initializeConfigSystem(): void {
  setInterval(reloadConfiguration, 60000);
  reloadConfiguration();
}());

export default config;

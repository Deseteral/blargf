import path from 'path';
import signale from 'signale';

interface Configuration {
  server: {
    port: number,
  },
  backgrounds: {
    subreddits: string[],
  },
  tasks: {
    refreshIntervalSeconds: number
  },
  events: {
    icalUrls: string[],
    refreshIntervalSeconds: number
  },
  pudeuko: {
    serviceUrl: string,
    refreshIntervalSeconds: number
  },
  countdowns: {
    list: ({ title: string, date: string })[],
    refreshIntervalSeconds: number,
  },
  alertBanner: {
    refreshIntervalSeconds: number,
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

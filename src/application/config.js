import path from 'path';
import signale from 'signale';

const configPath = path.join(__dirname, '..', '..', 'config.json');
let configData;

function reloadConfiguration() {
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

function config() {
  return configData;
}

(function initializeConfigSystem() {
  setInterval(reloadConfiguration, 60000);
  reloadConfiguration();
}());

export default config;

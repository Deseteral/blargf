import path from 'path';

const configPath = path.join(__dirname, '..', '..', 'config.json');
let configData;

function reloadConfiguration() {
  configData = require(configPath); // eslint-disable-line import/no-dynamic-require, global-require
}

function config() {
  return configData;
}

reloadConfiguration();

export default config;
export { reloadConfiguration };

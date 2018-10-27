import path from 'path';

const configPath = path.join(__dirname, '..', '..', 'config.json');
const config = require(configPath); // eslint-disable-line import/no-dynamic-require

export default config;

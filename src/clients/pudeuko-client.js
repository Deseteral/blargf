import fetch from 'node-fetch';
import config from '../application/config';

async function getPudeukoData() {
  const response = await fetch(`${config().pudeuko.service_url}/items`);
  return response.json();
}

export { getPudeukoData };

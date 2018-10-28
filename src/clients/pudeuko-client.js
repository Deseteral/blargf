import fetch from 'node-fetch';
import { Dropbox } from 'dropbox';
import config from '../application/config';

const dbx = new Dropbox({ accessToken: config.pudeuko.dropbox_token, fetch });

async function getPudeukoData() {
  const response = await dbx.filesDownload({ path: '/pudeuko/data.json' });
  return JSON.parse(response.fileBinary);
}

export { getPudeukoData };

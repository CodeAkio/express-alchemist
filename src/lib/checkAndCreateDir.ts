import fs from 'fs';

import getDirectory from './getDirectory';

function checkAndCreateDir(dirName: string): string | null {
  const absolutePath = getDirectory(dirName);

  try {
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath);
    }

    return absolutePath;
  } catch (err) {
    return null;
  }
}

export default checkAndCreateDir;

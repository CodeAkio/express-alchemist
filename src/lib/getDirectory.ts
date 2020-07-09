import path from 'path';

const getDirectory = (folder: string): string => {
  return path.join(process.cwd(), folder);
};

export default getDirectory;

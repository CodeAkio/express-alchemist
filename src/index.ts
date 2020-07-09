import getProjectName from './lib/ui/getProjectName';
// import getPrimaryDatabase from './lib/ui/getPrimaryDatabase';
// import getSecondaryDatabase from './lib/ui/getSecondaryDatabase';
// import getUseCache from './lib/ui/getUseCache';
// import getUseSocket from './lib/ui/getUseSocket';
// import getUseEmail from './lib/ui/getUseEmail';
// import getAuthentication from './lib/ui/getAuthentication';
// import getUseAuthorization from './lib/ui/getUseAuthorization';

import createProjectStructure from './lib/createProjectStructure';

async function main() {
  const projectName: string = await getProjectName();
  // const primaryDatabase: string = await getPrimaryDatabase();
  // const secondaryDatabase: string[] = await getSecondaryDatabase();
  // const useCache: boolean = await getUseCache();
  // const useSocket: boolean = await getUseSocket();
  // const useEmail: boolean = await getUseEmail();
  // const authentication: string[] = await getAuthentication();
  // const useAuthorization: boolean = await getUseAuthorization();

  const projectDir: string = await createProjectStructure(projectName);

  // Config editor config
  // Config eslint
  // Config Prettier
  // Config Database
  // Config secondary database
  // Config cache
  // Config web socker
  // Config email
  // Config authentication
  // Config Authorization
  // Confi test
}

main();

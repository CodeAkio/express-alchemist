import initYarn from './initYarn';
import createProjectDirs from './createProjectDirs';
import installExpress from './installExpress';
import installTypescript from './installTypescript';
import installEslint from './installEslint';

function createProjectStructure(projectName: string): string {
  const projectDir = createProjectDirs(projectName);

  initYarn(projectDir);

  installTypescript(projectDir);
  // Config typescript
  // Config editor config
  installEslint(projectDir);
  // Config eslint
  // Config Prettier
  installExpress(projectDir);
  // Config server
  // Config routes
  // Config App errors
  // Dependnecy Injection

  return projectDir;
}

export default createProjectStructure;

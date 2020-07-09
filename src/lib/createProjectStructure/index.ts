import initYarn from './initYarn';
import createProjectDirs from './createProjectDirs';
import installExpress from './installExpress';
import installTypescript from './installTypescript';

function createProjectStructure(projectName: string): string {
  const projectDir = createProjectDirs(projectName);

  initYarn(projectDir);

  installTypescript(projectDir);
  // Config typescript
  installExpress(projectDir);
  // Config server
  // Config routes
  // Config App errors

  return projectDir;
}

export default createProjectStructure;

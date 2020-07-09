import path from 'path';

import ora from 'ora';
import chalk from 'chalk';

import checkAndCreateDir from '../checkAndCreateDir';

function createProjectDirs(projectName: string): string {
  // Create root dir
  const projectDirectorySpinner = ora(
    `${chalk.yellow('CRIANDO:')} ${projectName}`,
  ).start();
  const projectDirectory = checkAndCreateDir(projectName);

  if (!projectDirectory) {
    projectDirectorySpinner.fail(`${chalk.red('ERRO:')} ${projectName}`);
    throw new Error('');
  }

  projectDirectorySpinner.succeed(`${chalk.green('OK:')} ${projectName}`);

  // Create sub dirs
  const projectStructureDirs = [
    path.join(projectName, 'src'),
    path.join(projectName, 'src', '@types'),
    path.join(projectName, 'src', 'config'),
    path.join(projectName, 'src', 'modules'),
    path.join(projectName, 'src', 'shared'),
    path.join(projectName, 'src', 'shared', 'container'),
    path.join(projectName, 'src', 'shared', 'errors'),
    path.join(projectName, 'src', 'shared', 'infra'),
    path.join(projectName, 'src', 'shared', 'http'),
    path.join(projectName, 'src', 'shared', 'http', 'routes'),
    path.join(projectName, 'src', 'shared', 'typeorm'),
    path.join(projectName, 'src', 'shared', 'typeorm', 'migrations'),
    path.join(projectName, 'tmp'),
  ];

  projectStructureDirs.forEach((dir) => {
    const spinner = ora(`${chalk.yellow('CRIANDO:')} ${dir}`).start();
    const createdDir = checkAndCreateDir(dir);

    if (!createdDir) {
      spinner.fail(`${chalk.red('ERRO:')} ${dir}`);
      throw new Error('Erro ao criar as sub pastas do projeto!');
    }

    spinner.succeed(`${chalk.green('OK:')} ${dir}`);
  });

  return projectDirectory;
}

export default createProjectDirs;

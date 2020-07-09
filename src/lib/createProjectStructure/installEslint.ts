import { spawnSync } from 'child_process';
import ora from 'ora';
import chalk from 'chalk';

function installEslint(projectDir: string): void {
  const spinner = ora('Instalando Eslint').start();
  const express = spawnSync(
    'yarn',
    ['add', 'eslint', 'eslint-import-resolver-typescript', '-D'],
    {
      cwd: projectDir,
    },
  );

  if (express.error) {
    spinner.fail(`${chalk.red('ERRO:')} Eslint não instalado!`);
    throw new Error('Eslint não instalado');
  }

  spinner.succeed(`${chalk.green('OK:')} Eslint instalado`);
}

export default installEslint;

import { spawnSync } from 'child_process';
import ora from 'ora';
import chalk from 'chalk';

function installTypescript(projectDir: string): void {
  const spinner = ora('Instalando Typescript').start();
  const express = spawnSync(
    'yarn',
    ['add', 'typescript', 'ts-node-dev', 'tsconfig-paths', '-D'],
    {
      cwd: projectDir,
    },
  );

  if (express.error) {
    spinner.fail(`${chalk.red('ERRO:')} Typescript não instalado!`);
    throw new Error('Typescript não instalado');
  }

  spinner.succeed(`${chalk.green('OK:')} Typescript instalado`);
}

export default installTypescript;

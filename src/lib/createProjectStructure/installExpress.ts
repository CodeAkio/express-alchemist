import { spawnSync } from 'child_process';
import ora from 'ora';
import chalk from 'chalk';

function installExpress(projectDir: string): void {
  const expressSpinner = ora('Instalando express').start();
  const express = spawnSync('yarn', ['add', 'express'], { cwd: projectDir });

  const expressTypesSpinner = ora('Instalado @types/express').start();
  const expressTypes = spawnSync('yarn', ['add', '@types/express', '-D'], {
    cwd: projectDir,
  });

  if (express.error) {
    expressSpinner.fail(`${chalk.red('ERRO:')} Express não instalado!`);
    throw new Error('Express não instalado');
  }

  if (expressTypes.error) {
    expressTypesSpinner.fail(
      `${chalk.red('ERRO:')} @types/express não instalado!`,
    );
    throw new Error('@types/express não instalado');
  }

  expressSpinner.succeed(`${chalk.green('OK:')} Express instalado`);
  expressTypesSpinner.succeed(`${chalk.green('OK:')} @types/express instalado`);
}

export default installExpress;

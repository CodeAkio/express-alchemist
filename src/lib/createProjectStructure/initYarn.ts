import { spawnSync } from 'child_process';
import ora from 'ora';
import chalk from 'chalk';

function initYarn(projectDir: string): void {
  const spinner = ora('Inicializando Yarn').start();
  const yarn = spawnSync('yarn', ['init', '-y'], { cwd: projectDir });

  if (yarn.error) {
    spinner.fail(`${chalk.red('ERRO:')} Yarn não foi inicializado!`);
    throw new Error('Yarn não inicializado');
  }

  spinner.succeed(`${chalk.green('OK:')} Yarn inicializado`);
}

export default initYarn;

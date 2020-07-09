import prompts from 'prompts';

async function getPrimaryDatabase(): Promise<string> {
  const response = await prompts({
    type: 'select',
    name: 'value',
    message: 'Qual o banco de dados principal?',
    choices: [
      { title: 'SQLite3', value: 'sqlite' },
      { title: 'Postgres', value: 'postgres' },
      { title: 'MariaDB', value: 'mariadb' },
      { title: 'Nenhum', value: 'none' },
    ],
    initial: 1,
  });

  return response.value;
}

export default getPrimaryDatabase;

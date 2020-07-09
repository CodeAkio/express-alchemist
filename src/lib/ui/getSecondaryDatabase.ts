import prompts from 'prompts';

async function getSecondaryDatabase(): Promise<string[]> {
  const response = await prompts({
    type: 'multiselect',
    name: 'value',
    message: 'Qual o banco de dados auxiliar vai utilizar?',
    choices: [
      { title: 'SQLite3', value: 'sqlite' },
      { title: 'MongoDB', value: 'mongodb' },
      { title: 'Redis', value: 'redis' },
      { title: 'Nenhum', value: 'none' },
    ],
  });

  return response.value;
}

export default getSecondaryDatabase;

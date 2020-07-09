import prompts from 'prompts';

async function getUseCache(): Promise<boolean> {
  const response = await prompts({
    type: 'toggle',
    name: 'value',
    message: 'Deseja trabalhar com cache?',
    initial: false,
    inactive: 'não',
    active: 'sim',
  });

  return response.value;
}

export default getUseCache;

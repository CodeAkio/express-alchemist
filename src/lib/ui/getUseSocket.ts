import prompts from 'prompts';

async function getUseSocket(): Promise<boolean> {
  const response = await prompts({
    type: 'toggle',
    name: 'value',
    message: 'Deseja trabalhar com socket?',
    initial: false,
    inactive: 'não',
    active: 'sim',
  });

  return response.value;
}

export default getUseSocket;

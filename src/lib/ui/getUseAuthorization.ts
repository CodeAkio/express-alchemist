import prompts from 'prompts';

async function getUseAuthorization(): Promise<boolean> {
  const response = await prompts({
    type: 'toggle',
    name: 'value',
    message: 'Deseja trabalhar com permissão de usuário?',
    initial: false,
    inactive: 'não',
    active: 'sim',
  });

  return response.value;
}

export default getUseAuthorization;

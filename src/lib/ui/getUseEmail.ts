import prompts from 'prompts';

async function getUseEmail(): Promise<boolean> {
  const response = await prompts({
    type: 'toggle',
    name: 'value',
    message: 'Deseja trabalhar com envio de e-mail?',
    initial: false,
    inactive: 'não',
    active: 'sim',
  });

  return response.value;
}

export default getUseEmail;

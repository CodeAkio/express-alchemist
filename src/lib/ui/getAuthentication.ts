import prompts from 'prompts';

async function getAuthentication(): Promise<string[]> {
  const response = await prompts({
    type: 'multiselect',
    name: 'value',
    message: 'Qual método de auteticação deseja utilizar?',
    choices: [
      { title: 'E-mail e senha', value: 'email' },
      { title: 'Google', value: 'google' },
      { title: 'Facebook', value: 'facebook' },
      { title: 'Nenhum', value: 'none' },
    ],
  });

  return response.value;
}

export default getAuthentication;

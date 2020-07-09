import prompts from 'prompts';

async function getName(): Promise<string> {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Nome do projeto',
    validate: (value: string) => (value === '' ? `O nome é obrigatório` : true),
  });

  return response.value;
}

export default getName;

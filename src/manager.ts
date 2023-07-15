import { NlpManager } from 'node-nlp';
const manager = new NlpManager({ languages: ['pt'], forceNER: true });

manager.addDocument('pt', 'por enquanto é isso, tchau', 'greetings.bye');
manager.addDocument('pt', 'tchau tchau se cuida', 'greetings.bye');
manager.addDocument('pt', 'tudo bem, até logo', 'greetings.bye');
manager.addDocument('pt', 'é isso, tchau', 'greetings.bye');
manager.addDocument('pt', 'preciso ir', 'greetings.bye');
manager.addDocument('pt', 'ola', 'greetings.hello');
manager.addDocument('pt', 'oi', 'greetings.hello');
manager.addDocument('pt', 'espere', 'greetings.hello');

manager.addAnswer('pt', 'greetings.bye', 'até a próxima');
manager.addAnswer('pt', 'greetings.bye', 'vejo você logo!');
manager.addAnswer('pt', 'greetings.hello', 'E ai!');
manager.addAnswer('pt', 'greetings.hello', 'Oi, como posso ajudar?'); 

manager.train()

export async function processarPergunta(pergunta: string): Promise<string> {
  const response = await manager.process('pt', pergunta);
  return response.answer || 'Desculpe, não tenho uma resposta para isso.';
}
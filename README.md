
# Pratical project using NLP with Node, node-nlp and typescript

I created this project initialy based on the oficial docs.

The propose of this project is starting studing about machine learning using natural language processing. 


## Technologies

- [Node](https://nodejs.org/en)
- [Fastify](https://fastify.dev)
- [Typescript](https://www.typescriptlang.org)
- [nlp.js](https://github.com/axa-group/nlp.js)


## Instructions

####  Follow a few steps to run this exemple project

Clone the project on your machine:

```bash
  git clone git@github.com:andreferreiradaweb/nlp-qna-node.git
```

After clonning, access the folder and install the dependencies running: 

```bash
  npm install
```

Now you just want to run the project: 

```bash
  npm run dev
```

If everything succeed, there is an exemple route that you can access to send your questions.

Just create a post request on the endpoint:

```bash
  http://localhost:3333/ask
```

In the "manager.ts" file, you can seen a simple exemplo code using node-nlp:

```bash
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

export async function processQuestion(pergunta: string): Promise<string> {
  const response = await manager.process('pt', pergunta);
  return response.answer || 'Desculpe, não tenho uma resposta para isso.';
}
```

I am calling the processQuestion function on the route on the file "app.ts"
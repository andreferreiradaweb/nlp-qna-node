import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { processarPergunta } from './manager';

export const app = fastify()

app.post('/responder', async (request: FastifyRequest, reply: FastifyReply) => {
  const { pergunta } = request.body as { pergunta: string };

  // Processar a pergunta usando o modelo treinado
  const resposta = await processarPergunta(pergunta);

  reply.send({ resposta });
});

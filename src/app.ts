import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { processQuestion } from './manager';

export const app = fastify()

app.post('/ask', async (request: FastifyRequest, reply: FastifyReply) => {
  const { pergunta } = request.body as { pergunta: string };

  // Processar a pergunta usando o modelo treinado
  const resposta = await processQuestion(pergunta);

  reply.send({ resposta });
});

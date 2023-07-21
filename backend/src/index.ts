import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Prompt } from './types';

const app = express();
const port = 8000;

app.get('/prompts', async (req: Request, res: Response) => {
  console.log('GET /prompts');
  const prisma = new PrismaClient();

  try {
    const data = await prisma.prompt.findMany();

    res.json(data);
  } catch (error) {
    res.json({ error });
  }

  prisma.$disconnect();
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

import express, { Request, Response } from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.use(cors());

app.get('/prompts', async (req: Request, res: Response) => {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.prompt.findMany();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error });
  }

  prisma.$disconnect();
});

app.post('/prompt', bodyParser.json(), async (req: Request, res: Response) => {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.prompt.create({
      data: {
        prompt: req.body.prompt,
        // TODO: replace with actual user id
        userId: 'cl7mevhm50008rc0cl7rgqmlk',
        seed: req.body.seed,
      },
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error });
  }

  prisma.$disconnect();
});

app.delete('/prompt/:id', async (req: Request, res: Response) => {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.prompt.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error });
  }

  prisma.$disconnect();
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

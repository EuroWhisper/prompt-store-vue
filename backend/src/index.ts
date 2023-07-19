import express, { Request, Response } from 'express';
import { Prompt } from './types';

const app = express();
const port = 8000;

app.get('/prompts', (req: Request, res: Response) => {
  const data: Prompt[] = [
    { id: 1, userId: 1, prompt: 'What is your name?' },
    { id: 2, userId: 1, prompt: 'What is your quest?' },
  ];

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

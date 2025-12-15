import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/hello/:name', (req: Request, res: Response) => {
  const hello = req.params;
  console.log(hello)
  res.send(`Hello ${hello.name}!`);
});

app.get('/hello/:name/:age', (req: Request, res: Response) => {
  const hello = req.params;
  console.log(hello)
  res.send(`Hello ${hello.name}! and your age is ${hello.age}`);
});

export default app;

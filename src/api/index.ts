import express, { Request, Response } from 'express';
import todoRouter from './routers/todoRouter';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello World!' });
})

app.use('/todos', todoRouter);

app.listen(1923, () => {
    console.log('Server is running on port 1923');
});
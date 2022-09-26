import express from 'express';
import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controllers/todoController';

const router = express.Router();

router
    .get('/', getTodos)
    .get('/:id', getTodo)
    .post('/', addTodo)
    .put('/:id', updateTodo)
    .delete('/:id', deleteTodo);

export default router;
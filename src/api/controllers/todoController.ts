import { Handler } from "express";
import { DB } from "../@fake-db";

export const getTodos: Handler = (req, res) => {
    res.status(200).json({ todos: DB });
}

export const addTodo: Handler = (req, res) => {
    const { title } = req.body;
    const newTodo = {
        id: Math.random().toString(),
        title,
        isCompleted: false
    }
    DB.push(newTodo);
    res.status(201).json({ message: 'Todo added successfully', todo: newTodo });
}

export const updateTodo: Handler = (req, res) => {
    const { id } = req.params;
    const currentItem = DB.find(todo => todo.id === id);
    if (!currentItem) {
        res.status(404).json({ message: 'Todo not found' });
    }
    const { title, isCompleted } = req.body;
    const updatedTodo = {
        title: title || currentItem.title,
        isCompleted: !!isCompleted
    }

    const updatedTodoIndex = DB.findIndex(todo => todo.id === id);
    DB[updatedTodoIndex] = { ...currentItem, ...updatedTodo };

    res.status(200).json({ message: 'Todo updated successfully', todo: DB[updatedTodoIndex] });

}

export const deleteTodo: Handler = (req, res) => {
    const { id } = req.params;
    const currentItem = DB.find(todo => todo.id === id);
    if (!currentItem) {
        res.status(404).json({ message: 'Todo not found' });
    }
    DB.slice(DB.indexOf(currentItem), 1);
    res.status(200).json({ message: 'Todo deleted successfully' });
}

export const getTodo: Handler = (req, res) => {
    const { id } = req.params;
    const currentItem = DB.find(todo => todo.id === id);
    if (!currentItem) {
        res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ todo: currentItem });

}
import { Router, Request, Response } from 'express'
import { Task } from '../models/task'
import { request } from 'http'
import { parse } from 'path'

const router = Router()
let tasks: Task[] = []

router.post('/', (req: Request, res: Response) => {
    const task: Task = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
    }
    tasks.push(task)
    res.status(201).json(task)
})

router.get('/', (req: Request, res: Response) => {
    res.json(tasks)
})

router.get('/', (req: Request, res: Response) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if (!task) {
        res.status(404).send('Task not found')
    } else {
        res.json(task)
    }
})

router.put('/', (req: Request, res: Response) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if (!task) {
        res.status(404).send('Task not found')
    } else {
        task.title = req.body.title || task.title
        task.description = req.body.description || task.description
        task.completed = req.body.completed || task.completed
        res.json(task)
    }
})

export default router
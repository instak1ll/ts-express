import express, { Request, Response } from 'express'
import taskRoutes from './routes/tasks'

const app = express()

const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json())
app.use('/tasks', taskRoutes)

//Frist get
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!')
})

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
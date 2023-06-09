import express, { Request, Response, NextFunction } from 'express'
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

//Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong')
})

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
require('./db/connect')
const express = require("express")
const app = express()
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// DB
const connectDB = require('./db/connect')

// Import routers
const tasksRoute = require('./routes/tasks')

// Middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasksRoute)
app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/v1/tasks')             - get all the tasks
// app.post('/api/v1/tasks')            - create a new task
// app.get('/api/v1/tasks/:id')         - get single task
// app.patch('/api/v1/tasks/:id')       - update task
// app.delete('/api/v1/tasks/:id')      - delete task

// Server and DB Listen
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
          console.log(`Server is up on port ${port}.`);
        });
    }
    catch (err) {
        console.log(err)
    }
}
start()
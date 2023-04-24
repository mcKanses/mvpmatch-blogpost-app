import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import mainRouter from './routers/main.router.js'

const PORT = 8000;

const app = express()

app.use(bodyParser.json())

app.use(cors('*'))

app.use(mainRouter)

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
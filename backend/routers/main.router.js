import { Router } from 'express'

import apiRouter from './api.router.js'

const routersRouter = Router();

routersRouter.use('/api', apiRouter)

export default routersRouter
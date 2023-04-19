import { Router } from 'express'

import blogpostsRouter from './v1/blogposts.router.js'

const v1Router = Router()

v1Router.use('/blogposts', blogpostsRouter)

export default v1Router
import { Router } from 'express'

import postsRouter from './v1/posts.router.js'

const v1Router = Router()

v1Router.use('/posts', postsRouter)

export default v1Router
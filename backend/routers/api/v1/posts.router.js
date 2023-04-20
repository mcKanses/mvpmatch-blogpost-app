import { Router } from 'express'

const postsRouter = Router()

postsRouter.get('/', (req, res, next) => res.json([]))

export default postsRouter
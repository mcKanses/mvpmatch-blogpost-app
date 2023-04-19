import { Router } from 'express'

const blogpostsRouter = Router()

blogpostsRouter.get('/', (req, res, next) => res.send('blogposts'))

export default blogpostsRouter
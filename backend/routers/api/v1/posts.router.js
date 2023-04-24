import { Router } from 'express'
import { randomUUID } from 'crypto'

import fs from 'fs/promises'
import path from 'path'

const postsRouter = Router()

const postsFile = path.join('./data/posts.json')

postsRouter.use(async (req, res, next) => {
  try {
    const fileData = await fs.readFile(postsFile, 'utf8')
    const posts = JSON.parse(fileData)
    res.locals.posts = posts
    next()
  } catch (error) {
    console.error(error)
  }
})

postsRouter.get('/', (req, res, next) => res.json(res.locals.posts))

postsRouter.get('/:postId', (req, res, next) => {
  const post = (res.locals.posts.find(post => post.id === req.params.postId))
  if (!post) return res.status(404).send('post not found')
  res.status(200).json(post)
})

postsRouter.post('/', async (req, res, next) => {

  const { title, text } = req.body
  
  if (!(title?.length >= 3 && text.length >= 20)) res.status(400).send('invalid data')

  const id = randomUUID()
  const timestamp = Date.now()

  res.locals.posts.push({
    id,
    title,
    text,
    timestamp,
  })

  try {
    await fs.writeFile(postsFile, JSON.stringify(res.locals.posts, null, 2))
    res.status(201).json({
      id,
      title,
      text,
      timestamp,
    })
  } catch (error) {
    console.error(error)
  }

})

export default postsRouter
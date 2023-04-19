import express from 'express'

const PORT = 8000;

const app = express()

app.listen(() => console.log(`app listening on port ${PORT}`))
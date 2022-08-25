import express from 'express'
import routes from './routes.js'

const PORT = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

export function startApp() {
  app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))
}

export default app

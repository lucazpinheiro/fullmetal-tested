const express = require('express')

const app = express()

const APP_PORT = process.env.PORT || 3000

// set json middleware
app.use(express.json())

// set routes
app.get('/', (req, res) => {
  try {
    res.json({ msg: 'eae meo' })
  } catch (err) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})
app.post('/', (req, res) => {
  try {
    const { body } = req

    console.log(body)

    res.status(201).json({ msg: 'é os guri' })
  } catch (err) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})

if (require.main === module) {
  app.listen(APP_PORT, () => {
    console.log(`Express started on http://localhost:${APP_PORT}; press Ctrl-C to terminate.`)
  })
} else {
  module.exports = app
}

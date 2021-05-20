const express = require('express')
const router = require('./routes')

const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.log(`Express is running on port http://localhost:${PORT}`)
})

const connectToMongo = require('./db')

const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/product', require('./routes/product'))

app.listen(port, () => {
  console.log(`Counterfeit app listening on port ${port}`)
})
connectToMongo()

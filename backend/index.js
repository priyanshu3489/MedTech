const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
const authpatient = require('./routes/authpatient')
const authdoctor = require('./routes/authdoctor')

connectToMongo();
const app = express()
const port = 5000


app.use(cors())

app.use(express.json())

// Available Routes
app.use('/api/authpatient', authpatient)
app.use('/api/authdoctor', authdoctor)


app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})


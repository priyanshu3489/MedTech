const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
const authpatient = require('./routes/authpatient')
const authdoctor = require('./routes/authdoctor')
const authhospital = require('./routes/authhospital')

connectToMongo();
const app = express()
const port = 5000


app.use(cors())

app.use(express.json())

// Available Routes
app.use('/api/authpatient', authpatient)
app.use('/api/authdoctor', authdoctor)
app.use('/api/authhospital', authhospital)


app.listen(port, () => {
  console.log(`MedTech backend listening on port ${port}`)
})


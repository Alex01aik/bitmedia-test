const express = require('express')
const router = require('./routes/routes.js')

//===connect and init sql database

// const dbinit = require('./dbinit-module')    
// dbinit()

//===

const PORT = process.env.PORT || 4200

const app = express()

app.use(router)

app.listen(PORT)
const express = require('express')
const app = express()
const cors = require('cors')

const indexRouter = require('./src/routes/index')
const registrationRouter = require('./src/routes/registration')
const recordRouter = require('./src/routes/record')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/', indexRouter)
app.use('/registration', registrationRouter)
app.use('/record', recordRouter)


const port = process.env.PORT || 3001
app.listen(port, (err) => {
  if(err){
    console.log('Erro ao iniciar servidor na porta ', port, err)
  } else {
    console.log('Servidor rodando na porta ', port)
  }
})


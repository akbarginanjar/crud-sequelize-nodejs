const express = require('express')

const app = express()

const userRouter = require('./routes/user')
app.use(express.urlencoded({ extended: true }))
app.use('/v1', userRouter)

app.listen(3000, function () {
  console.log('Server Ready Bos!!')
})

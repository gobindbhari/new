const express = require('express')
require("dotenv").config()
const userRouter = require('./routes/userRoute')
const postRouter = require('./routes/postRoute')
const cors = require('cors')
const upload = require('./middlewares/multer')

require('./models/index')

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use('/user', userRouter)
app.use('/post',upload.single('image') , postRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
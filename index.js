require('./cryptos/index.js')
const express = require('express')
require('dotenv').config();
const port = process.env.PORT|| 5000;
const app = express();
app.use(express.json());
app.use(express.static('./public'));
require('express-async-errors')
const cors = require('cors')
const helmet = require('helmet');
const { default: axios } = require('axios');
app.use(cors())
app.use(helmet())

setInterval(async()=>{
  await axios.get(process.env.URL)
},20000)

app.get('/api/v1/check',(req,res)=>{
    res.json({lol:'lol'})
})
app.listen(port ,()=>{
    console.log(`Server is running on port:${port}`)
})
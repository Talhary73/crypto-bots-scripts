require('./cryptos/index.js')
const express = require('express')
require('dotenv').config();
const port = process.env.PORT|| 5000;
const app = express();
const fsPromises = require('fs/promises')
app.use(express.json());
app.use(express.static('./public'));
require('express-async-errors')
const cors = require('cors')
const helmet = require('helmet');
const { default: axios } = require('axios');
app.use(cors())
app.use(helmet())

app.get('/api/v1/crypto/images',async(req,res)=>{
  try {
      const responses = await fsPromises.readdir('./images')
      res.json({code:200,images:responses.map((el)=>  process.env.URL+`/image/`+el)}).status(200)
  } catch (error) {
      res.json({code:500,error:error,message:error.message}).status(500)
  }
})
app.get('/image/:name',async(req,res)=>{
  try {
     const exist = require('fs').existsSync('./images/'+req.params.name)
     if(!exist) return res.json({code:400,msg:'Not found file'})
    //  const buffer = await fsPromises.readFile('./images/'+req.params.name)
     res.sendFile(path.join(__dirname, './images/'+req.params.name));
   
  } catch (error) {
    res.json({code:500,error:error,message:error.message}).status(500)
  }
})
setInterval(async()=>{
   try {
    await axios.get(process.env.URL)
   } catch (error) {
    
   }
},20000)

app.get('/api/v1/check',(req,res)=>{
    res.json({lol:'lol'})
})
app.listen(port ,()=>{
    console.log(`Server is running on port:${port}`)
})
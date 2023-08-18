const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./DB/mongoose')
app.use(express.json());
app.use(require('./router/router.js'));

const User = require('./modules/userShema');
const PORT = process.env.PORT;



app.listen(PORT, ()=>{
  console.log(`server is running on http://localhost:${PORT}`);
});
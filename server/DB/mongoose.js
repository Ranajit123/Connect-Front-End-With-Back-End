const mongoose = require('mongoose');

const mDB = process.env.DATABASE;

mongoose.connect(mDB).then(()=>{
  console.log(`mongodB connected...`)
}).catch((err)=>
  console.log(`mongodB doesn't connected...`)
)
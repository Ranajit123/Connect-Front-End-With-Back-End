const mongoose = require('mongoose');
const express = require('express');
const app = express();

const mDB = 'mongodb+srv://connectedBackendWithFrontend:DMsA8VUsKHgvXOZA@cluster0.b4ghabd.mongodb.net/'

mongoose.connect(mDB).then(()=>{
  console.log(`mongodB connected...`)
}).catch((err)=>
  console.log(`mongodB doesn't connected...`)
)

app.get('/',(req,res) =>{
  res.send(`you are doing well keep it up its just a bad time it will not there for all time good time coming soon all the best`);
});

app.get('/about',(req,res) =>{
  res.send(`hello Ranajit i am about page`);
});

app.get('/contact',(req,res) =>{
  res.send(`hello Ranajit I am contact page`);
});

app.get('/signin',(req,res) =>{
  res.send(`hello Ranajit I am signin page`);
});

app.get('/signup',(req,res) =>{
  res.send(`hello Ranajit I am signup page`);
});

app.listen(3000, ()=>{
  console.log(`server is running on http://localhost:3000`);
});
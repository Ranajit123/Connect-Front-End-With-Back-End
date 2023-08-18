const express = require('express');
const router = express.Router();

require('../DB/mongoose');
const User = require('../modules/userShema');

router.get('/',(req, res)=>{
  res.send(`Hello bhai I am with you don't worry`);
});

router.post('/register',(req, res)=>{

  const {name, email, phnumber, password, cpassword} = req.body;
  
  if(!name || !email || !phnumber || !password || !cpassword){
    return res.status(422).json({error:`Please fill all blanks..`});
  }

  User.findOne({email:email}).then((userExist)=>{
    if(userExist){
      return res.status(422).json({error:`user already exist..`});
    }

    const user = new User({name, email, phnumber, password, cpassword});

    user.save().then(()=>{
      res.status(201).json({message:"user registered succesfully"});
    }).catch((err)=>res.status(500).json({error:"Failed to register"}));
  }).catch(err => {console.log(err)});
})
module.exports = router;
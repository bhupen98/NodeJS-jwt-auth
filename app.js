const express  = require('express');
const jwt = require('jsonwebtoken');


const app = express();

app.get('/api',(req,res)=>{
    res.status(200).json({
      message: 'welcome to the API'
    });
});

app.post('/api/posts',(req,res)=>{
res.json({
    message:'Post created'
  });
});

app.post('/api/login',(req,res)=>{
    const user ={
        id:1,
        username:'bhupen',
        email:'bhupen@gmail.com'
    }

    jwt.sign({user},"secretkey",(err,token)=>{
        res.json({
          token:token 
        });
    });

});

app.listen(5000,()=>console.log('server running on port 5000'))

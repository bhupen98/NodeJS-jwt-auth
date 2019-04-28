# NodeJS-jwt-auth

### Installation
 ``` terminal 
      npm install --save express jsonwebtoken
 ```
 
 ### Generating token
 ``` javascript 
     const jwt = require('jsonwebtoken');
     const express = require('express');
     
     const app = express();
     
    app.post('/api/login',(req,res)=>{
    
    //new user
     const user= {
          id:'stdfggerwg454533t3t36',
          username:'bhupen',
          password:'password'
      }
   
     jwt.sign({user:user},'secret_Key',(err,token)=>{
        res.json({
          token:token
            });
         });
       });    
 ```

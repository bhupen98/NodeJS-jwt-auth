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
     
    app.post('/api/login',async (req,res)=>{
    
    //new user
     const payload= {
        user:{
          id:'stdfggerwg454533t3t36',
          }
      }
  
     try{
       const token =  await jwt.sign(payload,'secret_key',{expiresIn:'1hr})
     } catch(err){
      console.error(err)
     }
    
 ```

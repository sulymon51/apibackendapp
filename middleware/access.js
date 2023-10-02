 require('dotenv').config();
 const jwt = require('jsonwebtoken');
 
 const authAccess =(req,res, next) => {
    const intoken = req.header('Authorization');
    if(intoken == undefined){
        return res.status(400).json(
            {
                message: 'Header Authorization Required'
            });
    }
    const  bearerHeader = intoken.split(' ');
    const token = bearerHeader[1];
    console.log(token);
    if(!token){
        return res.status(401).json({message: 'Unauthenticated'});
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY , (err, user) => {
    if(err){
        return res.status(401).json({message: 'Invalid token'});
    }
     req.user = user;
     next();   
    });
 };
 module.exports = {authAccess}
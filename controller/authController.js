const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../models/user');


// Let's work on generating tokes 

const generateToken = (user) => {
    const payload ={
        id: user.id,
        username: user.username,
        email: user.email
    }
 return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});
};

exports.signup = async(req, res)=> {
 try {
    const  {username, email, password} = req.body;
    // console.log(username)
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({username, email, password: hashedPassword});
    const token = generateToken(user);
    return res.status(200).json({token});
 } catch (err) {
    console.log(err);
    return res.status(500).json({
        erro: err.message
    });

 }
}

exports.signin = async(req, res)=> {
    try {
       const  { email, password} = req.body;
       const user = await User.findOne({where: {email}});
        if (!user) {
            return res.status(401).json({error:"Invalid Email"});
        }
        const passwordCheck = await bcrypt.compare(password, user.password);

        if(!passwordCheck){
            return res.status(401).json({error:"Invalid Password"});
        }
        const token = generateToken(user);
        return res.status(200).json({token: token, user: user});

    } catch (err) {
       console.log(err);
       return res.status(500).json({
           erro: err.message
       });
   
    }
   }
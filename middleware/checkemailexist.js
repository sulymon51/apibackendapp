const User = require('../models/user');

const checkEmailExistence = async (req, res, next) => {
    try {
        const {email} = req.body;
        console.log(email);
        const existingUser = await User.findOne({where:{email}});
        if(existingUser){
            return res.status(409).json({
                success: false,
                message: 'Email Already exists'
            });
        }
        next();

    }catch (err){
        return res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }
}
module.exports ={checkEmailExistence};


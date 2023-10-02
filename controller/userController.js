const User = require('../models/user');

exports.getLoggedInUser = async (req, res) => {
    try {
        const loggedInUser = req.user;
        const user = await User.findByPk(loggedInUser.id);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const userdata = {
            id:user.id,
            username:user.username,
            email:user.email,
        }
        return res.status(200).json({
            success: true,
            data: userdata,
        });
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });

    }

}
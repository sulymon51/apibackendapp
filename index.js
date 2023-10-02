require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoute');

const app = express();
app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api/profile', userRoutes);

app.listen(process.env.PORT || 3009, ()=>{
    console.log('Server is running now  on port: ' + process.env.PORT);
})
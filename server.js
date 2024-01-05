const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;

// Connect Database\
connectDB();

//Init MiddleWare
app.use(express.json({
    extended:false
}));

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

// Define Routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/post'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
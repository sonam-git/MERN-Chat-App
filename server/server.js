const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

app.use('/api/chat', (req,res)=> {
    res.send(chat)
})

app.listen(PORT, ()=> {
    console.log('server is running')
})
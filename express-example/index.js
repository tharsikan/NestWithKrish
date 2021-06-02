const express =require('express');
const path = require('path');
const students = require('./students');
const logger = require('./middlewares/logger');

const app = express();

// init middleware fuction  // should be before other requests
app.use(logger); 
       
app.use(express.static(path.join(__dirname, 'public')));

app.get('/students', (req, res) => res.json(students));
// app.get('/', (req, res) => {
//     // res.send(`<h2>Helo world</h2>`);
//     res.send(path.join(__dirname, 'public/index.html'));
// });



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server started on ${PORT}`));
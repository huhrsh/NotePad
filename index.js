// requiring express and running it 
const express = require('express');
const app = express();
// declaring port number 
const port = 8000;
// body parser 
app.use(express.urlencoded({ extended: true }));
// including static files 
app.use(express.static('assets'));
// requiring db 
const db = require('./config/mongoose');
const Task = require('./models/tasks');
// use express router 
app.use('/', require('./routes'));
// setting view engine to ejs 
app.set('view engine', 'ejs');
app.set('views', './views');
// making the server listen 
app.listen(port, function (err) {
    if (err) {
        console.log("There's an error in listening");
        return;
    }
    console.log(`Server running on port ${port}`);
})


const express=require('express');
const app=express();
const port=8000;
app.use(express.static('assets'));
// use express router 
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log("There's an error in listening");
        return;
    }
    console.log(`Server running on port ${port}`);
})

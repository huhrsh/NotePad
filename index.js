const express=require('express');
const app=express();
const port=8000;
app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));
const db=require('./config/mongoose');
const Task=require('./models/tasks');
// use express router 
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.post('/create-note',function(req,res){
    // console.log(req.body);
    Task.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    })
    .then((newTask)=>{
        console.log(newTask);
        return res.redirect('back');
    })
    .catch((err)=>{
        console.log("There's an error in creating contact");
        return;
    })
})

app.listen(port,function(err){
    if(err){
        console.log("There's an error in listening");
        return;
    }
    console.log(`Server running on port ${port}`);
})


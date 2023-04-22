// let date=new Date();
// let MinDate= (date.getFullYear())+'-0'+(date.getMonth()+1)+'-'+(date.getDate());
module.exports.home=function(req,res){
    return res.render('home',{
        // minDate:String(MinDate),
        title:'ToDo List'
    });
}
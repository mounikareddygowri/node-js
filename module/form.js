const express=require('express');
const app=express();
const path=require('path');
app.use(express.static(path.join(__dirname,'public')))
app.get('/form.html',function(req,res){
    res.sendFile(path.join(__dirname,"form.html"));
});
app.get('/process_get',function(req,res){
    var response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
});
const server=app.listen(8000,function(){
    const host=server.address().address;
    const port=server.address().port;
    console.log("Example app listening at http://%s:%s",host,port);
});
var data=[{item:'get milk'},{item:'walk dog'},{item:'catch me'}]
var bodyparser=require("body-parser");
var urlencodedparser=bodyparser.urlencoded({extended:false});
module.exports=function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    });
    app.post('/todo',urlencodedparser,function(req,res){
      console.log(req.body);
      data.push(req.body);
      res.json(data);

    });
    app.delete('/todo/:item',function(req,res) {
              data=data.filter(function(todo){
           if (todo.item.replace(/ /g,'') == req.params.item.replace(/ /g,''))
                   {
for(var i=0;i<todo.length;i++)
  todo[i].splice(i,1);
}
res.json(data);
});
    });
};

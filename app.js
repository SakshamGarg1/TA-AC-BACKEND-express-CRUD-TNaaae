var express = require('express');
var path = require('path');

var app = express();

//middleware
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"))


app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(3000,()=>{
    console.log('server is running port 3000')
})
var express = require('express');
const { default: mongoose } = require('mongoose');
var app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req.query.num1)
    console.log(req.query.num2)
    sum = parseInt(req.query['num1']) + parseInt(req.query.num2)
    res.send("sum:"+sum)
})
app.delete('/delete',(req,res)=>{
    res.send("delete")
})

app.post('/sss',(req,res)=>{
    data = req.body
    // console.log(data["num"]);
    // data = {user:req.body}
    res.send(data)
    
})

app.get('/data',(req,res)=>{
    let item = college.find()
    return res.json({item})
})
app.listen(8008,()=>{
    console.log("listing at port 8008")
})


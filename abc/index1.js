const express = require("express");
var userObj = require('./mongodb')
const port = 8778

const app = express()
app.use(express.json())

app.get('/',async(req,res)=>{
     data = await userObj.find()
    if(data){
        res.send(data)
    }else{
        console.log("hhhhh")
    }
})

app.put('/',async(req,res)=>{
    let data = req.body
    console.log(data)
    let u = await userObj.updateOne({_id:data._id},{
        $set:{
            name: data.name,
            age:data.age
        }
    })
    res.send(data)
})

app.get('/:age',async(req,res)=>{
    console.log(req.params)
    let data = await userObj.find({age:req.params.age})
    console.log(data)
    res.send(data)
})

app.post('/data',async(req,res)=>{
    const {name,age} = req.body
    let data = new userObj({
        name,age
    }) 
    try{
        await data.save()
    }catch(err){
        return console.log(err)
    }
    return res.send(data)
})


app.delete('/',async(req,res)=>{
    console.log(req.body);
    const id = req.body
    let data = await userObj.deleteOne({_id:id._id})
    // let data = new 
    res.send(id.name)
})
app.listen(port,()=>{
    console.log(`listing on port ${port}`)
})
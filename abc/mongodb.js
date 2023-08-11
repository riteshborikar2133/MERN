const mongoose = require('mongoose')
const database = "mongodb+srv://riteshborikar2133:riteshborikar321@cluster0.y5ctwtu.mongodb.net/college?retryWrites=true&w=majority"
mongoose.connect(database,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(console.log("connected to mongoose"))
.catch((err)=>{console.log(err)})

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const userObj = new mongoose.model("user",userSchema)
// console.log(userObj)


module.exports = userObj
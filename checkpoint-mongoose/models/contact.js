const mongoose=require("mongoose")



const contactSchema= new mongoose.Schema ({
   

 name:{type:String,required:true},

 age:{type:Number,required:true},
 email:{type:String,required:true,unique:true},


})
module.exports=mongoose.model("conntact",contactSchema)
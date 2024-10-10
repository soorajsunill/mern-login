import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://soorajsunil9495:soorajsunil9495@cluster0.vkzvy.mongodb.net/perfumes")
.then(()=>{
  console.log("connected to mongodb");
  
})
.catch((err)=>{
  console.log(err);
  
})

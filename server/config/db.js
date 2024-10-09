import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://soorajsunil9495:soorajsunil9495@cluster0.vkzvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("connected to mongodb");
  
})
.catch((err)=>{
  console.log(err);
  
})

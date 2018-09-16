const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CRUD_DB',(err)=>{
    if(!err){
        console.log('successfully connected to mongodb');
    }
    else{
        console.log('error encountered');
    }
})

module.exports=mongoose;
import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
         type:String,
         required:true,
         trim:true,
    }


},{
    timestamps:true
})

const authModel = mongoose.model("Auth",authSchema);

export default authModel;
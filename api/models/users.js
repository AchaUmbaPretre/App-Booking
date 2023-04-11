import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        require: true,
        unique:true
    },
    email:{
        type: String,
        require: true,
        unique:true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
},{timestamps: true})

export default mongoose.model('User', userSchema)
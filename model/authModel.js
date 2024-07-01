const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true

    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","other"]
    },
    profilePicture:{
        type:String,
        default:"https://i.pinimg.com/564x/a9/84/97/a984975ea4053921c7983f0213840890.jpg"
    },
},{
    timestamps:true
});
module.exports = mongoose.model("User",userSchema);
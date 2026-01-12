import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    age : String,
    password : String,
})

userSchema.methods.generateToken =  async function(){
    try {
      return  jwt.sign({
            userid:this._id.toString(),
            email:this.email,
        },"any",{
            expiresIn:"10d",
        })
        
    } catch (error) {
        console.error(error)
    }

}



userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10);
    next()
    


})

 export const User = mongoose.model('User', userSchema);

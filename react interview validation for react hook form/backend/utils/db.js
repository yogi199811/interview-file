import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/thapa"


export const connectDb = async ()=>{
    try {
      await mongoose.connect(URI)
      console.log("Connect db");
      
        
    } catch (error) {
        console.log("mongodb error");
        process.exit(0)
        
        
    }
}
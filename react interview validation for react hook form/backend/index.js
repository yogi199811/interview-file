import express from "express"
import router from "./routes/auth-route.js"
import { connectDb } from "./utils/db.js"
const port = 3000


const app = express()

app.use(express.json())
app.use("/api",router)


// app.get("/",(req,res)=>{
//     res.send("working")
//     console.log("chala");
    
// })


connectDb().then(()=>{

    app.listen(port,()=>{
        console.log(`server running on port ${port}`);
        
    })
})

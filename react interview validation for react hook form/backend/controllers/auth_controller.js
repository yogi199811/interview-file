import { User } from "../model/userModel.js";
import bcrypt from "bcryptjs"


const home = async (req, res) => {
  try {
    res.send("thapa ");
  } catch (error) {
    console.log(error, "home page error");
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.send("user already exists");
    }
    const newUser = await User.create({ username, email, password });

    res
      .status(200)
      .json({
        msg: "user register successfully",
        token: await newUser.generateToken(),
        userid: newUser._id.toString(),
      });
  } catch (error) {
    console.log(error);
  }
};

const login  =  async (req,res)=>{
  try {
    const{email,password} = req.body

    const userexist = await User.findOne({email})

    if(!userexist) return res.status(401,"user not found")

      const user =  bcrypt.compare(password,userexist.password)

      if(user){
        res.status(200).json({msg:"login successfully",token: await userexist.generateToken(),userid:userexist._id.toString()})
      }else{
        res.status(401).json({msg:"invalid password"})


      }



    
  } catch (error) {
    console.error(error);
    
    
  }

}

const jokes = [
  {
    id: 1,
    text: "heyy good night",
  },

  {
    id: 2,
    text: "heyy good morning",
  },
  {
    id: 3,
    text: "heyy good evening",
  },
];

const joke = async (req, res) => {
  try {
    res.send(jokes);
  } catch (error) {
    console.log(error, "home page error");
  }
};

export { home, joke, register,login };

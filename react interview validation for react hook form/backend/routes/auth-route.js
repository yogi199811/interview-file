import express from "express"
const router = express.Router()
import { home,joke,register,login} from "../controllers/auth_controller.js"




router.route("/").get(home)
router.route("/register").post(register)
router.route("/login").post(login)


router.route("/jokes").get(joke)












export default router
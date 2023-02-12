import express,{Router} from 'express'
import { getAuth, getRegister } from '../controllers/addAuth.js';

const router = Router();

router.get("/",getAuth )
router.post("/register", getRegister)


export default router;
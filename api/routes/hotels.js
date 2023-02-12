import express,{Router} from 'express'
import { postHotels } from '../controllers/addHotels.js';


const router = Router();

router.post('/register',postHotels )

export default router;
import express,{Router} from 'express'
import { deleteHotels, getAllHotels, getOneHotels, postHotels, putHotels } from '../controllers/addHotels.js';


const router = Router();

router.post('/',postHotels )
router.put('/:id',putHotels )
router.delete('/:id',deleteHotels )
router.get('/:id',getOneHotels )
router.get('/',getAllHotels )

export default router;
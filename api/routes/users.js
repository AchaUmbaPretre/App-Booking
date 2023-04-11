import express, {Router} from 'express'
import { checkAuthentification, deleteUser, getAllUser, getOneUser, userUpdate } from '../controllers/addUser.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = Router();
router.get("/checkauth",verifyToken, checkAuthentification )
router.put("/:id", userUpdate )
router.delete("/:id", deleteUser )
router.get("/:id", getOneUser )
router.get("/", getAllUser )


export default router;
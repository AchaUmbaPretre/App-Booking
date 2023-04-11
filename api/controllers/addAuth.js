import users from "../models/users.js";
import bcrypt from 'bcryptjs'
import Jwt from "jsonwebtoken";
import { createErr } from "../utils/error.js";

export const Register = async (req, res) =>{
    
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const registerHotel = new users({
            username : req.body.username,
            email : req.body.email,
            password : hash
        })
         await registerHotel.save();
        res.status(200).json("l'utilisateur a ete crée avec succes")
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const login = async (req, res, next) =>{
    
    try{
        const user = await users.findOne({ username: req.body.username })
        if(!user) return next(createErr('404', 'le nom est incorrect'))

        const isPasswordCorrect = bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createErr('400', 'le mot de passe est incorrect'))

        const token = Jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

        const  { password, isAdmin,...other } = user._doc;

        res
        .cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json({...other})
    }
    catch(error){
        res.status(500).json(error)
    }
}
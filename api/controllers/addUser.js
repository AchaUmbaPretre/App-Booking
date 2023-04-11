import User from "../models/hotels.js"
import { createErr } from "../utils/error.js";

export const checkAuthentification = async (req, res, next) =>{
    res.send('login ok')
}
export const userUpdate = async (req, res) =>{
    
    try{

        const upDateUser = await User.findByIdAndUpdate(req.params.id, { $set:req.body }, {new: true});
        res.status(200).json(upDateUser)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const deleteUser = async (req, res) =>{
    
    try{

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("L'utilisateur a ete supprimé avec succes")
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const getOneUser = async (req, res) =>{
    
    try{

        const getUser = await Hotels.findById(req.params.id);
        res.status(200).json(getUser)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const getAllUser = async (req, res, next) =>{
    
    if (failed) return next(createErr(401, 'Vous n"etes pas authentifiés'));

    try{

        const getAllUsers = await Hotels.find();
        res.status(200).json(getAllUsers)
    }
    catch(error){
        res.status(500).json(error)
        next(error)
    }
}
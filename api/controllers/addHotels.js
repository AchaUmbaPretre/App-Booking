import Hotels from "../models/hotels.js"
import { createErr } from "../utils/error.js";


export const postHotels = async (req, res) =>{
    const newHotel = new Hotels(req.body)
    try{
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const putHotels = async (req, res) =>{
    
    try{

        const upDateHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set:req.body }, {new: true});
        res.status(200).json(upDateHotel)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const deleteHotels = async (req, res) =>{
    
    try{

        await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json("L'hotel a ete supprimé avec succes")
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const getOneHotels = async (req, res) =>{
    
    try{

        const getHotel = await Hotels.findById(req.params.id);
        res.status(200).json(getHotel)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const getAllHotels = async (req, res) =>{

    const failed = true;

    if (failed) return next(createErr(401, 'Vous n"etes pas authentifiés'));

    try{

        const getALLHotel = await Hotels.find();
        res.status(200).json(getALLHotel)
    }
    catch(error){
        res.status(500).json(error)
    }
}
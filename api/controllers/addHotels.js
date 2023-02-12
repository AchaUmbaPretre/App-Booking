import Hotels from "../models/hotels.js"
export const postHotels = async (req, res) =>{
    const newHotel = new Hotels(req.body)
    try{
        const saveHotel = await newHotel.saved()
        res.status(200).json(saveHotel)
        console.log(saveHotel)
    }
    catch(error){
        res.status(500).json(error)
    }
}
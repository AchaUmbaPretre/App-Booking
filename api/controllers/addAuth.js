

export const getAuth = (req, res)=>{
    res.send('je suis acha')
}
export const getRegister = async (req, res)=>{
    try{
        await console.log(req.body.username)
    }catch(error){
        console.log(error)
    }
}
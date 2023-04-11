import Jwt from "jsonwebtoken";
import { createErr } from "../utils/error.js";

export const verifyToken = (req, res, next) =>{

    const token = req.cookies.access_token;
    if(!token) return createErr('401', 'vous etes non authentiés');

    Jwt.verify(token, process.env.JWT, (err, user) =>{
        if(err) return next(createErr('402', 'votre token est non validé'));
        req.user = user;
        next();
    } )
}
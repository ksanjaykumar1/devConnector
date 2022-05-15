const jwt  = require('jsonwebtoken')
const config =require('config')


module.exports = function (req,res, next){

    // Get token from header

    const token = req.heade('x-auth-token')

    // Check if token is present

    if(!token){
        return res.status(401).json({msg: 'No token, authorization denied'})
    }

    // verify to token 
    try{
        // decode the token
        const decoded = jwt.verify(token,config.get('jwtSecret'))

        // set req.user
        req.user = decoded.user;
        next();
    }
    catch(err){
        req.status(401).json({msg: 'Token is not valid'})
    }
}
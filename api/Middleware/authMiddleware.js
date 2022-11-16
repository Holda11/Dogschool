const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../Models/UserModel')

const protect = asyncHandler(async(req, res, next)=>{
//Vytvoříme variable token, je LET neboť se hodnota bude měnit
    let token

// Pokud header a header začinající s header je pravda    
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
        token = req.headers.authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.id).select('-password')

        next()
    }catch(error){
        console.log(error)
        res.status(400)
        throw new Error('Nepřihlášen')
    }
}

if(!token){
    res.status(401)
    throw new Error('Nepřihlášen, chybí token')
}

})

module.exports = {
    protect
}
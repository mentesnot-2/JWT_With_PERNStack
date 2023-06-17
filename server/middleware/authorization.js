const jwt = require('jsonwebtoken')
require('dotenv').config()



module.exports = async (req,res,next)=>{
    try {
        const jwttoken = req.header("token")
        if(!jwttoken) {
            res.status(403).json("Not authorized")  
        }
        const payload = jwt.verify(jwttoken, process.env.jwtSecret)
        req.user = payload.user
        next()
    } catch (err) {
        console.error(err.message)
        res.status(403).json("Not authorized")
    }
    

}
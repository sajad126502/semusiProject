const jwt = require('jsonwebtoken');

const authenticateJWT =  (req, res, next) => {
    console.log(req.body)
    const jwttoken= req.body.jwttoken;
   
    if(!jwttoken) {
        return res.status(401).json({
            errorMessage: "No token. Authentication denied",
        })
    }

    try{
        const decoded = jwt.verify(jwttoken,process.env.jwtSecret);
        console.log(decoded);
        req.user=decoded.user
        next();
    }catch(err){
        console.log('jwt error: ', err);
        res.status(401).json({
            errorMessage: "Invalid token"
        });
    }
}
module.exports=authenticateJWT

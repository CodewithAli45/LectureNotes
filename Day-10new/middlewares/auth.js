const jwt = require('jsonwebtoken');

function validateCredential(req, res, next){
    const token = req.header("X-Auth-Token")
    if(!token){
        return res.status(403).send("Access denied, no token available");

    }
    try{
        const decoded = jwt.verify(token, "JWTPrivateKey");
        req.user = decoded;

    }catch(err){
        return res.status(400).send({
            msg: "internal server error",
            error: err.message,
        })
    }
}

module.exports = {
    validateCredential,
}
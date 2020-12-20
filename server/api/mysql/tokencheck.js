const jwt = require('jsonwebtoken');
const utils = require('../../utils');

module.exports = {
    checkToken: (req, res)=>{
        var token = req.headers.authorization.split(' ')[1] ||req.body.token || req.query.token;
        if (!token) {
            return res.status(400).json({
                error: true,
                message: "Token is required."
            });
        }
        // check token that was passed by decoding token using secret
        jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
            if (err) return res.status(401).json({
                error: true,
                message: "Invalid token."
            });

            var userObj = utils.getCleanUser(user);
            console.log(user)
            return res.json({ user: userObj, token });
        });
    },
    auth:  async (req, res, next)=>{
        // console.log("check token" + JSON.stringify(req.headers.authorization))
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                res.status(401).send({ message: 'Authorization token missing' });
                return;
            }
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decodedToken)
            req.userData = { userId: decodedToken.id, role: decodedToken.role };
            next();
        } catch (err) {
            console.log(err)
            res.status(403).send({ message: 'Authentication failed!' });
            return;
        }
    }
}
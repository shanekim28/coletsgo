const jwt = require('jsonwebtoken');

function authenticateToken(res,req,next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, 'YOUR_SECRET_KEY', (err, user) => {
        if (err) {
          return res.sendStatus(401); // Unauthorized
        }
        req.user = user;
        next();
      });
    }
    
    module.exports = {
      authenticateToken
    
};
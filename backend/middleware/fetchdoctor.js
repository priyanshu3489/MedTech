const jwt = require('jsonwebtoken');
JWT_SECRET = 'priyanshu';

const fetchdoctor = (req, res, next) => {
    //Get the patient from the token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.doctor = data.doctor;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}

module.exports = fetchdoctor;
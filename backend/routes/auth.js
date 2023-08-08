const express = require('express');
const router = express.Router();
const Patients = require('../models/Patients');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'priyanshu';


// route1: Create a patient user using: POST "/api/auth/createpatient". No login required

router.post('/createpatient', [
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    // body('gender'),
    // body('birthdate'),
    // body('mobileno', 'Enter a valid mobile number'),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    // body('address', 'Enter permanent address'),
    // body('city', 'Enter current city'),
    // body('state', 'Enter current state'),
    // body('bloodgroup'),
    // body('weight'),
    // body('bloodsuger'),
    // body('bloodpressure'),
    // body('eyespower'),
    // body('handicap'),
    // body('insurance'),
], async (req, res) => {

    let success = false;
    //If there are errors, return sad request and the  errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // check whether the patient with this mobile exists already
    try {
        let patient = await Patients.findOne({ email: req.body.email });
        if (patient) {
            return res.status(400).json({ success, error: 'Sorry a user with this mobile number already exists' })
        }

        //secure password create
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //create a new patient user
        patient = await Patients.create({
            name: req.body.name,
            // gender: req.body.gender,
            // birthdate: req.body.birthdate,
            // mobileno: req.body.mobileno,
            password: secPass,
            email: req.body.email,
            // address: req.body.address,
            // city: req.body.city,
            // state: req.body.state,
            // bloodgroup: req.body.bloodgroup,
            // weight: req.body.weight,
            // bloodsuger: req.body.bloodsuger,
            // bloodpressure: req.body.bloodpressure,
            // naeyespowerme: req.body.eyespower,
            // handicap: req.body.handicap,
            // insurance: req.body.insurance,
            
        });
        const data = {
            patient: {
                id: patient.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        // res.json(user)
        success = true;
        res.json({ success, authtoken })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})

module.exports = router
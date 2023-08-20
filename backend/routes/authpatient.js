const express = require('express');
const router = express.Router();
const Patients = require('../models/Patients');
const fetchpatient = require('../middleware/fetchpatient')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'priyanshu';


// route1: Create a patient using: POST "/api/authpatient/createpatient". No login required

router.post('/createpatient', [
    body('fname', 'Enter a valid first name').isLength({ min: 5 }),
    body('lname', 'Enter a valid last name').isLength({ min: 5 }),
    body('gender'),
    body('birthdate'),
    body('mobileno', 'Enter a valid mobile number'),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('address', 'Enter permanent address'),
    body('city', 'Enter current city'),
    body('state', 'Enter current state'),
    body('bloodgroup'),
    body('weight'),
    body('bloodsuger'),
    body('bloodpressure'),
    body('eyespower'),
    body('handicap'),
    body('insurance'),
], async (req, res) => {

    let success = false;
    //If there are errors, return sad request and the  errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // check whether the patient with this mobile exists already
    try {
        let patient = await Patients.findOne({ mobileno: req.body.mobileno });
        if (patient) {
            return res.status(400).json({ success, error: 'Sorry a patient with this mobile number already exists' })
        }

        //secure password create
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //create a new patient patient
        patient = await Patients.create({
            fname: req.body.name,
            lname: req.body.name,
            gender: req.body.gender,
            birthdate: req.body.birthdate,
            mobileno: req.body.mobileno,
            password: secPass,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            bloodgroup: req.body.bloodgroup,
            weight: req.body.weight,
            bloodsuger: req.body.bloodsuger,
            bloodpressure: req.body.bloodpressure,
            naeyespowerme: req.body.eyespower,
            handicap: req.body.handicap,
            insurance: req.body.insurance,

        });
        const data = {
            patient: {
                id: patient.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        // res.json(patient)
        success = true;
        res.json({ success, authtoken })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})

// route2: Authenticate a patient using: POST "/api/authpatient/login". No login required

router.post('/login', [
    body('mobileno', 'Enter a valid mobile number'),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    //If there are errors, return sad request and the  errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { mobileno, password } = req.body;
    try {
        let patient = await Patients.findOne({ mobileno });
        if (!patient) {
            success = false;
            return res.status(400).json({ error: "Please try to login with correct Credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, patient.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct Credentials" });
        }
        const data = {
            patient: {
                id: patient.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})


// route3: Get loggedin patient details using: POST "/api/authpatient/patient". Login required

router.post('/patient', fetchpatient, async (req, res) => {

    try {
      patientId = req.patient.id;
      const patient = await Patients.findById(patientId).select("-password")
      res.send(patient)
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error")
    }
  })

  
module.exports = router;
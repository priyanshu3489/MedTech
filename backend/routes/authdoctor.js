
const express = require('express');
const router = express.Router();
const Doctors = require('../models/Doctors');
const fetchdoctor = require('../middleware/fetchdoctor')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'priyanshu';


// route1: Create a doctor using: POST "/api/authdoctor/createdoctor". No login required

router.post('/createdoctor', [
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    body('gender'),
    body('birthdate'),
    body('mobileno', 'Enter a valid mobile number'),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('workinghospitalname', 'Enter current working hospital name'),
    body('city', 'Enter current city'),
    body('state', 'Enter current state'),
    body('degree', ),
    body('experience', 'Enter your experience'),
    body('expertise',),
], async (req, res) => {

    let success = false;
    //If there are errors, return sad request and the  errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // check whether the doctor with this mobile exists already
    try {
        let doctor = await Doctors.findOne({ mobileno: req.body.mobileno });
        if (doctor) {
            return res.status(400).json({ success, error: 'Sorry a doctor with this mobile number already exists' })
        }

        //secure password create
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //create a new doctor
        doctor = await Doctors.create({
            name: req.body.name,
            gender: req.body.gender,
            birthdate: req.body.birthdate,
            mobileno: req.body.mobileno,
            password: secPass,
            email: req.body.email,
            workinghospitalname: req.body.workinghospitalname,
            city: req.body.city,
            state: req.body.state,
            degree: req.body.degree,
            experience: req.body.experience,
            expertise: req.body.expertise,

        });
        const data = {
            doctor: {
                id: doctor.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        // res.json(doctor)
        success = true;
        res.json({ success, authtoken })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})

// route2: Authenticate a doctor using: POST "/api/authdoctor/login". No login required

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
        let doctor = await Doctors.findOne({ mobileno });
        if (!doctor) {
            success = false;
            return res.status(400).json({ error: "Please try to login with correct Credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, doctor.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct Credentials" });
        }
        const data = {
            doctor: {
                id: doctor.id
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


// route3: Get loggedin doctor details using: POST "/api/authdoctor/doctor". Login required

router.post('/doctor', fetchdoctor, async (req, res) => {

    try {
      doctorId = req.doctor.id;
      const doctor = await Doctors.findById(doctorId).select("-password")
      res.send(doctor)
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error")
    }
  })

  
module.exports = router;
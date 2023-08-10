
const express = require('express');
const router = express.Router();
const Hospitals = require('../models/Hospitals');
const fetchhospital = require('../middleware/fetchhospital')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'priyanshu';


// route1: Create a hospital using: POST "/api/authhospital/createhospital". No login required

router.post('/createhospital', [
    body('hospitalname', 'Enter your hospital name').isLength({ min: 5 }),

], async (req, res) => {

    let success = false;
    //If there are errors, return sad request and the  errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // check whether the hospital with this mobile exists already
    try {
        let hospital = await Hospitals.findOne({ username: req.body.username });
        if (hospital) {
            return res.status(400).json({ success, error: 'Sorry, this username already exists' })
        }

        //secure password create
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //create a new doctor
        hospital = await Hospitals.create({
            hospitalname: req.body.hospitalname,

        });
        const data = {
            hospital: {
                id: hospital.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        // res.json(hospital)
        success = true;
        res.json({ success, authtoken })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})

// route2: Authenticate a hospital using: POST "/api/authhospital/login". No login required

router.post('/login', [
    body('username', 'Enter a valid username'),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    //If there are errors, return sad request and the  errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
        let hospital = await Hospitals.findOne({ username });
        if (!hospital) {
            success = false;
            return res.status(400).json({ error: "Please try to login with correct Credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, doctor.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct Credentials" });
        }
        const data = {
            hospital: {
                id: hospital.id
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


// route3: Get loggedin hospital details using: POST "/api/authhospital/hospital". Login required

router.post('/hospital', fetchhospital, async (req, res) => {

    try {
        hospitalId = req.hospital.id;
      const hospital = await Hospitals.findById(hospitalId).select("-password")
      res.send(hospital)
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error")
    }
  })

  
module.exports = router;
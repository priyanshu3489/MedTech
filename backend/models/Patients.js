const mongoose = require('mongoose');
const { Schema } = mongoose;

// create schema for patient side server

const PatientSchema = new Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true,
        enum: {
            values: ['male', 'female', 'other'],
            message: 'Please Write Like "male", "female" and "other"'
        }
    },
    birthdate: {
        type: Date,
        require: true
    },
    mobileno: {
        type: Number,
        require: true,
        unique: true,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    bloodgroup: {
        type: String,
        default: 'None',
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB+', 'O+', 'O-', '', 'none', 'None'],
            message: 'Please enter valid blood group or "none"'
        }
    },
    weight: {
        type: Number,
    },
    bloodsuger: {
        type: Boolean,
        require: true
    },
    bloodpressure: {
        type: Boolean,
        require: true
    },
    eyespower: {
        type: Boolean,
        require: true
    },
    handicap: {
        type: Boolean,
        require: true
    },
    insurance: {
        type: Boolean,
    },

});

const Patients = mongoose.model('patient', PatientSchema);
module.exports = Patients;
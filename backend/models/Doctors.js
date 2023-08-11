const mongoose = require('mongoose');
const { Schema } = mongoose;

// create schema for doctor side server

const DoctorSchema = new Schema({
    name: {
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
    workinghospitalname: {
        type: String,
        require: false
    },
    //locality
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    degree: {
        type: String,
        require: true
    },
    experience: {
        type: String,
        require: true
    },
    expertise:{
        type : String,
        require: false
    }
    
});

const Doctors = mongoose.model('doctor', DoctorSchema);
module.exports = Doctors;
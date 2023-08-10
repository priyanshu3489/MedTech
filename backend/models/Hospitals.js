const mongoose = require('mongoose');
const { Schema } = mongoose;

// create schema for hospital side server

const HospitalSchema = new Schema({
    hospitalname:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    mobileno:{
        type: Number,
        require: true,
        unique: true,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    email:{
        type: String,
        require: true,
        require: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    hospitaltype:{
        type: String,
        require: true
    },
    locality:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    state:{
        type: String,
        require: true
    },
    pincode:{
        type: Number,
        require: true
    },
    
});

const Hospitals = mongoose.model('hospital', HospitalSchema);
module.exports = Hospitals;
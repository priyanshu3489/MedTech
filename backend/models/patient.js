import mongoose from "mongoose";
import { Schema } from "mongoose";

// create schema for patient side server

const PatientSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    birthdate:{
        type: Date,
        require: true
    },
    mobileno:{
        type: Number,
        require: true,
        
    },
    email:{
        type: String,
        require: true
    },
    add:{
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
    bloodgroup:{
        type: String,
    },
    weight:{
        type: Number,
    },
    bloodsuger:{
        type: Boolean,
        require: true
    },
    bloodpressure:{
        type: Boolean,
        require: true
    },
    eyespower:{
        type: Boolean,
        require: true
    },
    handicap:{
        type: Boolean,
        require: true
    },
    insurance:{
        type: Boolean,
    },
   
});

const patient = mongoose.model('patient', PatientSchema);
module.exports = patient;
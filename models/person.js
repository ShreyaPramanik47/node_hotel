const mongoose = require('mongoose');
const bcrypt= require('bcrypt');
// Define the Person schema
const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
      type:Number  
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    adress:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

personSchema.pre('save',)

// Create Person model
const person = mongoose.model('person',personSchema);
module.exports=person;
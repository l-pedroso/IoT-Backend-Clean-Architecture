const mongoose = require('mongoose');
const { Schema } = mongoose;

userSchema = new Schema({

    firstName: {
        type: String,
    },

    lastName:{
        type: String,
    },

    email: {
        type: String,
        required: true,
    },

    devices:{
        type: Array,
    }    
});


module.exports = mongoose.model('users', userSchema);
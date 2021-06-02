const mongoose = require('mongoose');
const { Schema } = mongoose;

userSchema = new Schema({
    userEmail: {
        type: String,
        required: true,
    },

    firstName: {
        type: String,
    },

    lastName:{
        type: String,
    },

    devices:{
        type: Array,
    }
        
            
});


module.exports = mongoose.model('users', userSchema);
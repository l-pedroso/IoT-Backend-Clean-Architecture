const mongoose = require('mongoose');
const { Schema } = mongoose;

deviceSchema = new Schema({

    deviceId: {
        type: String,
        required: true,
    },

    deviceName:{
        type: String,
        required: true,
    },

    typeId: {
        type: String,
        required: true,
    },

    authToken:{
        type: String,
        required: true,
    },
    
    userEmail:{
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('devices', deviceSchema);
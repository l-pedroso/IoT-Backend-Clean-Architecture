module.exports = class Device{

    constructor(id, name, type, token, email){
        this.deviceID =  id;
        this.deviceName = name;
        this.typeID = type;
        this.authToken = token;
        this.userEmail = email;
    }
}
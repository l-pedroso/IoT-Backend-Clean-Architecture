module.exports = class Device{

    constructor(id, name, type, token, email){
        this.deviceId =  id;
        this.deviceName = name;
        this.typeId = type;
        this.authToken = token;
        this.userEmail = email;
    }
}
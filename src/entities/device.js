module.exports = class Device{

    constructor(id, type, token){
        this.deviceID =  id;
        this.typeID = type;
        this.authToken = token;
    }
}
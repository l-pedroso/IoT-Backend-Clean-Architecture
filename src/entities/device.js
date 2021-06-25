module.exports = class Device{

    constructor(id, name, type, token){
        this.deviceID =  id;
        this.name = name;
        this.typeID = type;
        this.authToken = token;
    }
}
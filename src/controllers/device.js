const addDevice = require('../useCases/add_device');

module.exports = class DeviceController{

    constructor(dependencies){
        this.dependencies = dependencies;
    }

    async _getInfo(token){
        const auth = new this.Auth();   
        try{
            const userInfo = await auth.getUserInfo(token);
            return userInfo;
        }
        catch(e){
            throw e;
        }
    }

    async add(req, res, next){
        try{
            const userInfo = await this._getInfo(req.get('authorization'));  
            const deviceInfo = {
                name: req.body.deviceName,
                type: req.body.deviceType,
            }         
            const result = await addDevice(userInfo, deviceInfo, this.dependencies);
            res.json({Success: 'device added', deviceInfo: result});
        }catch(e){
            next(e);
        }
    }
}
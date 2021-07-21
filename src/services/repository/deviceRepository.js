const DeviceRepositoryContract = require('../../Interfaces/IRepository');
const DeviceModel = require('./schema/device');

module.exports = class DeviceRepository extends DeviceRepositoryContract{
    constructor(){
        super();
    }

    async add(deviceInfo){
        try{
            const device = new DeviceModel({
                deviceId: deviceInfo.deviceId,
                deviceName: deviceInfo.deviceName,
                typeId: deviceInfo.typeId,
                authToken: deviceInfo.authToken,
                userEmail: deviceInfo.userEmail,
            });
    
           const result =  await device.save();
           if(result != device){
            throw new Error('database error');
          };
        }
        catch(e){
            throw e;
        }
    }
}
const Device = require('../entities/device');

module.exports = async (userInfo, deviceInfo, {UserRepository, DeviceRepository, uuid, mqttBrokerService}) => {
    const deviceRepository = new DeviceRepository();
    const userRespository = new UserRepository();

    try{
        const query = await userRespository.findByEmail(userInfo.email);
        const {deviceID, typeId, authToken} = await mqttBrokerService.add(uuid(), deviceInfo.type);
        const device = new Device(deviceID, deviceInfo.name, typeId, authToken);
        await deviceRepository.add(query.email, device);

    }catch(e){
        throw e;
    }
}
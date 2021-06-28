const Device = require('../entities/device');

module.exports = async (userInfo, deviceInfo, {UserRepository, DeviceRepository, uuid, MqttBroker}) => {
    const deviceRepository = new DeviceRepository();
    const userRespository = new UserRepository();
    const mqttBroker = new MqttBroker();

    try{
        const query = await userRespository.findByEmail(userInfo.email);
        const {deviceId, deviceType, deviceToken} = await mqttBroker.add(uuid(), deviceInfo.type);
        const device = new Device(deviceId, deviceInfo.name, deviceType, deviceToken);
        await deviceRepository.add(query.email, device);

    }catch(e){
        throw e;
    }
}
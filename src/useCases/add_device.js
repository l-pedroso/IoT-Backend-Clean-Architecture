const Device = require('../entities/device');

module.exports = async (userInfo, deviceInfo, {UserRepository, DeviceRepository, uuid, MqttBrokerService}) => {
    const deviceRepository = new DeviceRepository();
    const userRepository = new UserRepository();
    const mqttBroker = new MqttBrokerService();

    try{
        const query = await userRepository.findByEmail(userInfo.email);
        const {deviceId, deviceType, deviceToken} = await mqttBroker.add(uuid(), deviceInfo.type);
        const device = new Device(deviceId, deviceInfo.name, deviceType, deviceToken, query.email);
        await deviceRepository.add(device);
        return device;
    }
    catch(e){
        throw e;
    }
}
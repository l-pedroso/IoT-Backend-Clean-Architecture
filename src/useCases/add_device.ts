import Device from "../entities/device";
import IUserInfo from "../Interfaces/IUserInfo";
import IDeviceInfo from "../Interfaces/IDeviceInfo";
import { IMQTTservice } from "../Interfaces/IMQTT";
import { IUserRepository, IDeviceRepository } from "../Interfaces/IRepository";


export default async function (userInfo: IUserInfo, deviceInfo: IDeviceInfo, userRepository: IUserRepository, deviceRepository: IDeviceRepository, uuid :string, MQTT: IMQTTservice): Promise<Device> {

    
    try {
        const query = await userRepository.findByEmail(userInfo.email);
        const {token} = await MQTT.add(uuid, deviceInfo);
        const device = new Device(uuid, deviceInfo.name, deviceType, token, query.email);
        await deviceRepository.add(device);
        return device;
    }
    catch (e) {
        throw e;
    }
}
import Device from "../entities/device";
import IUserInfo from "../Interfaces/IUserInfo";
import IDeviceInfo from "../Interfaces/IDeviceInfo";
import IUUID from "../Interfaces/IUUID";
import { IMQTTservice } from "../Interfaces/IMQTT";
import { IUserRepository, IDeviceRepository } from "../Interfaces/IRepository";


export default async function (userInfo: IUserInfo, deviceInfo: IDeviceInfo, userRepository: IUserRepository, deviceRepository: IDeviceRepository, uuid : IUUID, MQTT: IMQTTservice): Promise<Device> {
    const uniqueID = uuid.getId();
    try {
        const query = await userRepository.findByEmail(userInfo.email);
        const {token} = await MQTT.add(uniqueID, deviceInfo);
        const device = new Device(uniqueID, deviceInfo.name, deviceInfo.type, token, query.email);
        await deviceRepository.add(device);
        return device;
    }
    catch (e) {
        throw e;
    }
}
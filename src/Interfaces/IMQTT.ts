import IDeviceInfo from "./IDeviceInfo";

export interface IMQTTresult{
    token: string;
}

export interface IMQTTservice{
    add(deviceID: string, deviceInfo: IDeviceInfo) : Promise<IMQTTresult>;
}
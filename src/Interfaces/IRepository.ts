import User   from "../entities/user";
import Device from "../entities/device";

export interface IUserRepository {
     add(userInfo: User): Promise<any>;
     findByEmail(email: string): Promise<any>;
     update(userInfo: User): Promise<any>;
}

export interface IDeviceRepository {
     add(device: Device): Promise<any>;
}
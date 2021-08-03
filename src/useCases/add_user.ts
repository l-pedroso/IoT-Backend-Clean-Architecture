import User from "../entities/user";
import IUserInfo from "../Interfaces/IUserInfo"
import { IUserRepository } from "../Interfaces/IRepository"

export default async function addUser(userInfo: IUserInfo, userRepository: IUserRepository) {
    const user = new User(userInfo.firstName, userInfo.lastName, userInfo.email);

    try {
        await userRepository.add(user);
    }
    catch (e) {
        throw e;
    }
}

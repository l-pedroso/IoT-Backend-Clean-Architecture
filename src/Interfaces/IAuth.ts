import IUserInfo from "./IUserInfo";

export default  interface IAuth{

    checkJWT(): Promise<any>;

    getUserInfo(token: string) : IUserInfo;

}
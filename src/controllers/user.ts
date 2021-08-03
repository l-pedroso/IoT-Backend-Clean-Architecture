import addUser from "../useCases/add_user";
import { IUserRepository } from "../Interfaces/IRepository";
import IAuth from "../Interfaces/IAuth";

export default class UserController {

    userRepository: IUserRepository;
    authService: IAuth;

    constructor(userRepository: IUserRepository, authService: IAuth) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    async add(req: any, res: any, next: any) {
        try {
            const userInfo = await this.authService.getUserInfo(req.get('authorization'));
            if (userInfo.email_verified === false) throw new Error('email not verified');
            await addUser(userInfo, this.userRepository);
            res.json({ Sucess: 'User added' });
        }
        catch (e) {
            next(e);
        }
    }

    /*
    async update(req, res, next){
        try{
            const userInfo = await this._getInfo(req.get('authorization'));
            const updatedUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: userInfo.email,
            };
            await updateUser(updatedUser, this.UserRepository);
            res.json({Success: 'User updated'});
        }
        catch(e){
            next(e);
        }   
    }
    */
}
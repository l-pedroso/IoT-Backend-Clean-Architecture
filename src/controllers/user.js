const addUser = require('../useCases/add_user');
const updateUser = require('../useCases/update_user');


module.exports = class UserController{
    
    constructor(dependencies){
        this.UserRepository = dependencies.UserRepository;
        this.Auth = dependencies.AuthService;
    }

    async _getInfo(token){
        const auth = new this.Auth();   
        try{
            const userInfo = await auth.getUserInfo(token);
            return userInfo;
        }
        catch(e){
            throw e;
        }
    }

    async add(req, res, next){
        try{
            const userInfo = await this._getInfo(req.get('authorization'));
            if(userInfo.email_verified === false) throw new Error('email not verified');
            await addUser(userInfo, this.UserRepository);
            res.json({Sucess: 'User added'});
        }
        catch(e){
            next(e);
        }
    }

    async update(req, res, next){
        try{
            const userInfo = await this._getInfo(req.get('authorization'));
            const updatedUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: userInfo.email,
            };
            await updateUser(updatedUser, this.UserRepository);
            res.json({Sucess: 'User updated'});
        }
        catch(e){
            next(e);
        }   
    }
}
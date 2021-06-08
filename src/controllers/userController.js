const addUser = require('../useCases/add_user');

module.exports = class UserController{
    
    constructor(dependencies){
        this.UserRepository = dependencies.UserRepository;
        this.Auth = dependencies.AuthService;
    }

    async add(req, res, next){
    
        const token = req.get('authorization');
        const auth = new this.Auth();

        try{
            const userInfo = await auth.getUserInfo(token);
            if(userInfo.email_verified === false) throw new Error('email not verified');
            await addUser(userInfo, this.UserRepository);
            res.json({Sucess: 'User added'});
        }
        catch(e){
            next(e);
        }
    }
}
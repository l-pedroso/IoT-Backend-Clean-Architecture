const addUser = require('../use_cases/add_user');

module.exports = class User{
    
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
            const info = {
                firstName: userInfo.given_name,
                lastName: userInfo.family_name,
                email: userInfo.email,
            }
            await addUser(info, this.UserRepository);
            res.json({Sucess: 'User added'});
        }
        catch(e){
            next(e);
        }
    }
}
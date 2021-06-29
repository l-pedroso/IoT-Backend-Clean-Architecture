const UserRepositoryContract = require('../../contracts/userRepository');
const UserModel = require('./schema/user');

module.exports = class UserRepository extends UserRepositoryContract{
    constructor(){
        super();
    }

        
    async findByEmail(userEmail){
        const query = await UserModel.findOne({email: userEmail});
        if(!query) throw new Error('User not found');
        return query;         
    }

    
    async add(userInfo){
        try{
            const query = await this.findByEmail(userInfo.email);
            if(query != null) throw new Error('user aready in database');

            const user = new UserModel({firstName:userInfo.firstName, lastName:userInfo.lastName, email: userInfo.email});
            const result = await user.save();

            if(result != user){
               throw new Error('database error');
             }
        }catch(e){
            throw e;
        } 
    }



    async update(userInfo){
        try{
            const user = await this.findByEmail(userInfo.email);
            user.firstName = userInfo.firstName;
            user.lastName = userInfo.lastName;
            await user.save();
        }
        catch(e){
            throw e;
        }
    }
}           
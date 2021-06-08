const UserRepositoryContract = require('../../contracts/userRepository');
const UserModel = require('./schema/user');

module.exports = class UserRepository extends UserRepositoryContract{
    constructor(){
        super();
    }
    async add(data){
        try{
            const user = new UserModel({firstName: data.firstName, lastName: data.lastName, email: data.email})
            const result = await user.save();
            if(result != user){
               throw new Error('database error');
             }
        }catch(e){
            throw e;
        }
    }
    
    async findByEmail(userEmail){
        const query = await UserModel.findOne({email: userEmail});
        if(!query) return null;
        return query;   
          
    }
}           
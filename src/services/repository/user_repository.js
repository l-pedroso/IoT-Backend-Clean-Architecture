const UserRepositoryContract = require('../../contracts/user_repository');
const UserModel = require('./model/user');

module.exports = class UserRepository extends UserRepositoryContract{
    constructor(){
        super();
    }
    async add(data){
        try{
            const user = new UserModel({firstName: data.firstName, lastName: data.lastName, userEmail: data.email})
            const result = await user.save();
            if(result != user){
               throw new Error('database error');
             }
        }catch(e){
            throw e;
        }
    }   
}
const DatabaseContract = require('../../contracts/database');
const UserModel = require('./model/user');

module.exports = class UserRepository extends DatabaseContract{
    
    constructor(){}

    async add(data){

        try{
            const user = new UserModel({userEmail: data.email, firstName: data.firstName, lastName: data.lastName})
            const result = await user.save();
            if(result != user){
               throw new Error('Database Error');
             }
        }catch(e){
            throw e;
        }

        
    }   

}
const User = require('../entities/user');

module.exports = async (userInfo, UserRepository) => { 
    const user = new User(userInfo.firstName, userInfo.lastName, userInfo.email);
    const repository = new UserRepository();

    try{
        await repository.add(user);
    }
    catch(e){
        throw e;
    }    
}

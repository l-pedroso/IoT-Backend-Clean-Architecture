const User = require('../entities/user');

module.exports = async(userInfo, UserRepository) => {
    const user = new User(userInfo.firstName, userInfo.lastName, userInfo.email);
    repository = new UserRepository();
    try{
        await repository.update(user);
    }
    catch(e){
        throw e;
    }
}
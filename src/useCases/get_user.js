const User = require('../entities/user');

module.exports = async(userInfo, UserRepository) => {
    const repository = new UserRepository();

    try{
        const query = await repository.findByEmail(userInfo.email);
        return new User(query.firstName, query.lastName, query.email);    
    }catch(e){
        throw e;
    }
}
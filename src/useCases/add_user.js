const User = require('../entities/user');

module.exports = async (userInfo, UserRepository) => { 
    const user = new User(userInfo.firstName, userInfo.lastName, userInfo.email);
    const repository = new UserRepository();

    try{
        const result = await repository.findByEmail(user.email);
        if(result != null) throw new Error('user aready in database');
        await repository.add(user);
    }
    catch(e){
        throw e;
    }    
}

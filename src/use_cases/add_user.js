const User = require('../entities/user');

module.exports = async (userInfo, UserRepository) => { 
    const user = new User(userInfo);
    const respository = new UserRepository();

    try{
        const result = await respository.findByEmail(user.email);
        if(result != null) throw new Error('user aready in database');
        await repository.add(user);
    }
    catch(e){
        throw e;
    }    
}

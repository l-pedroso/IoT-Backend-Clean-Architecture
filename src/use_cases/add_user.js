
const newUser = async (UserInfo, UserRepository) => {
    
    if(UserInfo.email_verified === false){
        throw new Error('email not verified');
    }
    
    try{
        const info = await UserRepository.findByEmail(UserInfo.email);

        if(info != null){
    
            throw new Error('user aready in database');
        }
    
        await UserRepository.add(UserInfo);

    }
    catch(e){
        throw(e);
    }


    
    
    
}

exports.addUser = newUser;
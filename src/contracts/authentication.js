module.exports = class AuthenticationContract{

    constructor(){}

    checkJwt(){
        return Promise.reject(new Error('not implemented'));
    }

    getUserInfo(jwt){
        return Promise.reject(new Error('not implemented'));
    }

}
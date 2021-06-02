module.exports = class AuthenticationContract{

    constructor(){}

    checkJwt(){
        return Promise.reject(new Error('not implemented'));
    }

    getUserInfo(){
        return Promise.reject(new Error('not implemented'));
    }

}
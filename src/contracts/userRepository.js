module.exports = class UserRepositoryContract {
    constructor() { }

    add(userInfo) {
        return Promise.reject(new Error('not implemented 1'));
    }

    findByEmail(email){
        return Promise.reject(new Error('not implemented 2'));
    }


}
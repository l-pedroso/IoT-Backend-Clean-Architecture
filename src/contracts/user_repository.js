module.exports = class UserRepositoryContract {
    constructor() { }

    add(userInfo) {
        return Promise.reject(new Error('not implemented'));
    }

    findByEmail(email){
        return Promise.reject(new Error('not implemented'));
    }


}
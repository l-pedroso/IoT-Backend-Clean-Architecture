const User = require('../entities/user');


module.exports = class UserInfo extends User{

    constructor(firstName, lastName, email, email_verified) {
        super(firstName, lastName, email);
        this.email_verified = email_verified;
    }
}
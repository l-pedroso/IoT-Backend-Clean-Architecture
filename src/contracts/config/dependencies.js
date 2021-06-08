const UserRepository = require('../../services/repository/userRepository');
const Auth = require('../../services/authentication/auth');


module.exports = {
    UserRepository: UserRepository,
    AuthService: Auth
}
const UserRepository = require('../../services/repository/user_repository');
const Auth = require('../../services/authentication/auth');


module.exports = {
    UserRepository: UserRepository,
    AuthService: Auth
}
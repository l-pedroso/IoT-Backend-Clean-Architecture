const UserRepository = require('../../services/repository/userRepository');
const Auth = require('../../services/authentication/auth');
const uuid = require('../../services/uuid');


module.exports = {
    UserRepository: UserRepository,
    AuthService: Auth,
    uuid: uuid,
    mqttBrokerService: BrokerService
}
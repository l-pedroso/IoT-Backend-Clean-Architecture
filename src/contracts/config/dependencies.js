const UserRepository = require('../../services/repository/userRepository');
const  DeviceRepository = require('../../services/repository/deviceRepository');
const Auth = require('../../services/authentication/auth');
const uuid = require('../../services/uuid');
const mqttBroker = require('../../services/mqttBroker');


module.exports = {
    UserRepository: UserRepository,
    DeviceRepository:  DeviceRepository,
    AuthService: Auth,
    uuid: uuid,
    mqttBrokerService: mqttBroker
}
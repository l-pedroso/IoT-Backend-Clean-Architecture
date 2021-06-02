const Auth = require('../services/authentication/auth');

const auth = new Auth();

module.exports = auth.checkJwt;
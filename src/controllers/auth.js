const Auth = require('../services/authentication/auth');


module.exports = (err, req, res, next) => {

    const auth = new Auth();
    auth.checkJwt(err, req, res, next);
}
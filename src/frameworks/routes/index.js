const express = require('express');
const router = express.Router();
const Auth = require('../../services/authentication/auth');
const userRoutes = require('./user');
const dependencies = require('../../contracts/config/dependencies');


const auth = new Auth();

router.use(auth.checkJwt);
router.use('/user', userRoutes(dependencies));
router.use( function (err, req, res, next) {
  res.status(500).json({ERROR:err.message, STACK:err.stack});
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Auth = require('../../services/authentication/auth');
const userRoutes = require('./user');
const deviceRoutes = require('./device');
const dependencies = require('../../contracts/config/dependencies');


const checkJwt = new Auth().checkJwt();

router.use(checkJwt);
router.use('/user', userRoutes(dependencies));
router.use('/device', deviceRoutes(dependencies));
router.use( function (err, req, res, next) {
  res.status(500).json({ERROR:err.message, STACK:err.stack});
});

module.exports = router;
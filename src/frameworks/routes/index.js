const express = require('express');
const router = express.Router();
const dependences = require('../../contracts/config/dependencies');
const UserController = require('../../controllers/user');
const Auth = require('../../controllers/auth');


const user = new UserController(dependences);
const auth = Auth();
router.use(auth);

router.post('/user/add', user.add);

router.use( function (err, req, res, next) {
  res.status(500).json({ERROR:err.message});
});

module.exports = router;
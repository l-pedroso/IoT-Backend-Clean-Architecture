const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController');



module.exports = (dependencies) => {
    const user = new UserController(dependencies);
    router.post('/add', user.add.bind(user));
    router.post('/update', user.update.bind(user))
    return router;
}





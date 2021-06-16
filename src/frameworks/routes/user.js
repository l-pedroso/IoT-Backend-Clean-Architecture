const express = require('express');
const router = express.Router();
const User = require('../../controllers/user');



module.exports = (dependencies) => {
    const user = new User(dependencies);
    router.post('/add', user.add.bind(user));
    router.post('/update', user.update.bind(user))
    return router;
}





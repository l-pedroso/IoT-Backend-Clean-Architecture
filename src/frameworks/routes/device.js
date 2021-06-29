const express = require('express');
const router = express.Router();
const Device = require('../../controllers/device');

module.exports = (dependencies) => {
    const device = new Device(dependencies);
    router.post('/add', device.add.bind(device));
    return router;
}
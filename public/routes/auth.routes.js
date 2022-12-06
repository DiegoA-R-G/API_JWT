const { Router } = require('express');
const {  postAuthentication, } = require('../controllers/authController')

const route = Router();

route.post('/', postAuthentication);

module.exports = route;
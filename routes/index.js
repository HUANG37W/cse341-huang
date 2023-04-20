const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.helloFunction);
routes.get('/another', myController.returnAnotherPerson);

module.exports = routes;
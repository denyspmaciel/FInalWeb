const express = require('express');
const routes = express.Router();

const EventController = require('./controllers/EventController');

routes.get('/events', EventController.index);
routes.get('/events/:id', EventController.show);
routes.post('/events', EventController.store);
routes.put('/events/:id', EventController.update);
routes.delete('/events/:id', EventController.destroy);

module.exports = routes;
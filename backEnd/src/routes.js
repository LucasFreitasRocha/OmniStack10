const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();
routes.post('/dev/create', DevController.store);
routes.get('/devs' , DevController.index);
routes.get('/dev/search', SearchController.search);
module.exports = routes;
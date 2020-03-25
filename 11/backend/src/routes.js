const express = require('express')
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.json({
        'nome': 'Lucas Rocha',
        'OmniStack': {
            'semana': '11'
        },
    });
});
routes.post('/ong/create', OngController.store );
routes.get('/ongs' , OngController.index);
routes.post('/incidents/create', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/login', SessionController.login);

module.exports = routes;
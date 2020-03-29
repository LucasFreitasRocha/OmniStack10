const express = require('express')
const {celebrate, Joi, Segments } = require('celebrate')
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
routes.post('/ong/create', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        mail: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),  OngController.store );
routes.get('/ongs' , OngController.index);
routes.post('/incidents/create', IncidentController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index);
routes.post('/login', SessionController.login);

module.exports = routes;
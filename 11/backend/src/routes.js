const express = require('express')

const routes = express.Router();

routes.get('/', (req, res)=>{
    res.json({
        'nome': 'Lucas Rocha',
        'OmniStack': {
            'semana': '11'
        },
    });
});
routes.post('/hellopost', (req,res)=>{
    res.json('hello post world');
});

module.exports = routes;
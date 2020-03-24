const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.json({
        'nome': 'Lucas Rocha',
        'OmniStack': {
            'semana': '11'
        },
    });
});

app.listen(333)
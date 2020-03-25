const connection = require('../db/connection');
const crypto = require('crypto');
module.exports = {
    async index(req,res){
        return res.json( await connection('ongs').select('*'));
    },
    async store(req,res){
        const{ name, mail, whatsapp, city,uf} = req.body;
        const id  = crypto.randomBytes(4).toString('HEX');
    
         await connection('ongs').insert({
            id,
            name,
            mail,
            whatsapp,
            city,
            uf
    
        });
        return res.json({id});
    }
}
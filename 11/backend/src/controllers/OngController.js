const connection = require('../db/connection');
const generateID = require('../utils/generateUniqueId');
module.exports = {
    async index(req,res){
        return res.json( await connection('ongs').select('*'));
    },
    async store(req,res){
        const{ name, mail, whatsapp, city,uf} = req.body;
        const id  = generateID();
    
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
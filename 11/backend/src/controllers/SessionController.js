const connection = require('../db/connection');
module.exports = {
    async login(req,res){
        const { id } = req.body;
        const ong = await connection('ongs').where('id', id).select('name').first();

        if(!ong){
            return res.status(400).json({error: " Login incorreto" });
        }

        return res.json(ong);
    }
}
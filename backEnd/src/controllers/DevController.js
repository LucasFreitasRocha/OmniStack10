const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringToArray');
const { findConnections, sendMessage} = require('../websocket');
module.exports = {
    async index(req,res){    
        return res.json( await Dev.find());
    },
    async store(req, res)  {
        const { github_username, techs, latitude, longitude } = req.body;
        let dev = await Dev.findOne({github_username});
        const response = await axios.get(`https://api.github.com/users/${github_username}`);

        if(!dev){
            const { name = login, avatar_url, bio } = response.data;
            const techsArray = parseStringToArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            // filtrar as conexões que estão há no maximo 10km de distancia
            // e que o novo dev tenha as techs procuradas
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techsArray
                );
            sendMessage(sendSocketMessageTo, 'newDev', dev);

        }
        return res.json(dev);
       
       
    }
}
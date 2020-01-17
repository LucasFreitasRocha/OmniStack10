const socketio = require('socket.io');
const parseStringToArry = require('./utils/parseStringToArray.js');
const calculateDistance = require('./utils/calculateDistance');
const connections = [];
let io
exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('conection', socket => {
        console.log(socket.id);
        const {latitude, longitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates:{
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringToArry(techs)
        })
    });
}

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connections =>{
        return calculateDistance(coordinates, connections.coordinates)<10
         && connections.techs.some(item => techs.includes(item))
    });
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message,data);
    })
}
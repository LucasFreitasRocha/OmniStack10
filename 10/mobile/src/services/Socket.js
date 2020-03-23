import socketio from 'socket.io-client';
const socket = socketio('http://10.0.0.69:19000', {
    autoConnect: false,
}); /*colocar o ip que estiver aparecendo no quando rodar o comando yarn start no mobile , ip do emulador do android 10.0.2.2*/

function subscribeToNewDevs(subcribeFunction){
    socket.on('new-dev', subcribeFunction);
}

function connect(latitude,longitude ,techs){
    socket.io.opts.query ={
        latitude,
        longitude,
        techs
    };
    socket.connect();

}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs

}
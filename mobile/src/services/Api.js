import axios from 'axios';

const Api = axios.create({
    baseURL: 'http:// ' /*colocar o ip que estiver aparecendo no quando rodar o comando yarn start no mobile , ip do emulador do android 10.0.2.2*/
});

export default Api;
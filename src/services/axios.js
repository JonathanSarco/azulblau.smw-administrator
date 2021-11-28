import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://azulblau-swm-default-rtdb.firebaseio.com'
    baseURL: 'http://localhost:5005/v1'
});

export default instance;
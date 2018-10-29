import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-learn-burger.firebaseio.com/'
});

export default instance;
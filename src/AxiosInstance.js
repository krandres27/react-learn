import axios from 'axios';

// THERE CAN BE MULTIPLE INSTANCES, EACH OF THESE WITH DIFFERENT CONFIGS
// AND POINTING THE SPECIAL NEEDS OF THE MODULES OR COMPONENTS THAT ARE USING THEM

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        common: {
            Authorization: 'AUTH_TOKEN FROM INSTANCE'
        }
    }
});

// ALSO IT CAN HAVE ITS OWN HEADERS
// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN FROM INSTANCE';

// AND ALSO INSTANCES CAN HAVE ITS OWN INTERCEPTORS
// instance.interceptos.reques ...

export default instance;
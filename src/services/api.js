import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aircncsemanaomnistack.herokuapp.com/',
});

export default api;
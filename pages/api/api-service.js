import axios from 'axios';

const ApiMicroService = axios.create({
    baseURL: process.env.URL_API,
    responseType: 'json',
})
ApiMicroService.defaults.headers.post['Content-Type'] = 'application/json';

export default ApiMicroService;

import axios from 'axios';

console.log("--- API: ", process.env.URL_API);
const ApiMicroService = axios.create({
    baseURL: process.env.URL_API,
    responseType: 'json',
})
ApiMicroService.defaults.headers.post['Content-Type'] = 'application/json'
console.log('----- ApiMicroService: ', ApiMicroService);
export default ApiMicroService;

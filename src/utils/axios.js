import axios from "axios"
const baseUrl = 'http://37.32.8.176:8000/api/';
const Api = (_config, body = null, headers) => {
    
    const token = localStorage.getItem('token');
    let config = {
        baseURL: baseUrl,
        method: 'GET',
        headers: {
        
            'content-Type': 'application/json; ',
            "Authorization": `${token}`,
            ...headers
        },
        ..._config,
        ...(body ? {
            data: body
        } : null)
    }
    return axios(config)
}

// axios.interceptors.response.use(function (response) {
//     // Do something with response data
//     return response;
// }, function (error) {
//     // Do something with response error
//     if (error.response.status === 401) {
//         localStorage.removeItem('token')
//         delete axios.defaults.headers.common?.Authorization
//         this.$router.push('/dashboard')
//     }
//     console.log('error', error)
//     return Promise.reject(error);
// });

export default Api
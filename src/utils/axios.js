import axios from "axios"
const baseUrl = 'http://37.32.8.176:8000/api/';
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token ? token : ''
const Api = (_config, body = null, headers) => {

    let config = {
        baseURL: baseUrl,
        method: 'GET',
        headers: {
            ...headers
        },
        ..._config,
        ...(body ? {
            data: {
                ...body
            }
        } : null)
    }
    return axios(config)
}

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    if(error.response.status === 401) {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common?.Authorization
    }
    console.log('error', error)
    return Promise.reject(error);
  });

export default Api
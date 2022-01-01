import axios from 'axios'

axios.defaults.baseURL = "http://3.35.9.115:25123"

axios.interceptors.request.use(
    (reqData) =>{
        console.log('interceptors.request');
        return reqData
    }
)
axios.interceptors.response.use(
    (resData) =>{
        console.log('interceptors.response');
        return resData
    }
)

export default axios
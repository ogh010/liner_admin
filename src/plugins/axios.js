import axios from 'axios'
import router from '@/router'

// axios.defaults.baseURL = "http://3.35.9.115:25123"
axios.defaults.headers.Authorization = localStorage.getItem('ln_co')


axios.interceptors.request.use(
    (reqData) =>{
        console.log('interceptors.request');
        return reqData
    }
)
axios.interceptors.response.use(
    (resData) =>{
        console.log('interceptors.response');
        if (resData.data.resultCode == 99998) {
            localStorage.removeItem('ln_co');
            router.replace({name: 'login'})
        }
        return resData
    }
)

export default axios
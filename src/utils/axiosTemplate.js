import axios from '../plugins/axios'

export default(url,reqData)=>{
    console.log(url);
    axios.post(url,reqData)
    .then((res)=>{
        console.log(res.data);
    })
}
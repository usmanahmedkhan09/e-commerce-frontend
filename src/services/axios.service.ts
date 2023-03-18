import axios from 'axios';
import utilService from './util.service';
import { TYPE } from 'vue-toastification'
const baseURL = '/api'
const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});
instance.interceptors.response.use(function (response)
{
    if (response.data.isSuccess)
    {
        utilService.showToast(response.data.message);
    }
    return response
}, function (error)
{
    let { response } = error
    if (!response.data.isSuccess)
    {
        utilService.showToast(response.data.message, TYPE.ERROR);
    }
    return response
})
export default instance
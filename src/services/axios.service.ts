import axios from 'axios';
import utilService from './util.service';
import { TYPE } from 'vue-toastification'
import storageService from './storage.service';

const baseURL = '/api'
const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(function (config: any)
{
    if (config.headers == undefined)
    {
        config.headers = {}
    }

    const token = storageService.getProperty('token')
    if (token)
    {
        config.headers.Authorization = `Bearer ${token}`
        // config.headers = { ...config.headers } as AxiosHeaders;
        // config.headers.set('Authorization', `Bearer ${token}`)
    }
    return config
}, (error) =>
{
    return Promise.reject(error);
}

)

instance.interceptors.response.use(function (response)
{
    if (response.data.isSuccess && response.status == 201 || response.status == 200)
    {
        utilService.showToast(response.data.message);
    }

    return response.data

}, function (error)
{
    let { response } = error
    if (!response.data.isSuccess)
    {
        let { errorsData } = response.data
        if (errorsData.length > 0)
        {
            errorsData.forEach((item: any) =>
            {
                utilService.showToast(item.msg, TYPE.ERROR)
            })
        }
        utilService.showToast(response.data.message, TYPE.ERROR);
    }
    return response.data
})

export default instance
import axios from 'axios';
import utilService from './util.service';
import { TYPE } from 'vue-toastification'
import storageService from './storage.service';
import { useRouter } from 'vue-router'
import router from '@/router';

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
    }
    return config
}, (error) =>
{
    return Promise.reject(error);
}

)

instance.interceptors.response.use(function (response)
{

    if (response.data.isSuccess && response.data.message && (response.status == 201 || response.status == 200))
    {
        utilService.showToast(response.data.message);
    }

    return response.data

}, function (error)
{

    let { response } = error
    if (!response.data.isSuccess)
    {
        let { errorsData, status } = response.data
        if (errorsData && errorsData.length > 0)
        {
            errorsData.forEach((item: any) =>
            {
                utilService.showToast(item.msg, TYPE.ERROR)
            })
        }
        else if (response.status == 401)
        {
            storageService.removeProperty('token')
            router.push('/login')
            return
        }
        utilService.showToast(response.data.message ?? response.message, TYPE.ERROR);
    } else
    {
        utilService.showToast(response.data.message, TYPE.ERROR);
    }
    return response.data
})

export default instance
import { useToast, TYPE } from 'vue-toastification'
import axios from '@/services/axios.service'
class Util
{
    public baseUrl = 'http://localhost:3000/api/'
    showToast(
        message: string,
        type: TYPE = TYPE.SUCCESS,
        duration: number = 2000
    )
    {
        const toast = useToast();

        if (type === TYPE.SUCCESS)
        {
            toast.success(message, {
                timeout: duration,
            });
        } else if (type === TYPE.ERROR)
        {
            toast.error(message, {
                timeout: duration,
            });
        } else if (type === TYPE.WARNING)
        {
            toast.warning(message, {
                timeout: duration,
            });
        } else if (type === TYPE.INFO)
        {
            toast.info(message, {
                timeout: duration,
            });
        }
        return { toast };
    }

    async uploadFileOnServer(file: any)
    {
        let form = new FormData()
        form.append('image', file[0])
        try
        {
            let response = await axios.post(`/image/single`, form, { headers: { 'Content-Type': 'multipart/form-data' } })
            return response
        } catch (error)
        {
            console.log(error);
        }
    }

    async removeMedia(name: any, path: any)
    {
        try
        {
            let response = await axios.delete(`/image/removeImage`, { data: { name: name, path: path } })
            return response
        } catch (error)
        {
            console.log(error);
        }
    }
}

export default new Util()
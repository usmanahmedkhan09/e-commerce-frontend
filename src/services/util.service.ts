import { useToast, TYPE } from 'vue-toastification'
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
}

export default new Util()
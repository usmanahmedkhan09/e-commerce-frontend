class Storage
{
    private token: string | undefined
    private user: string | undefined

    setProperty(key: string, value: any, jsonParse = true)
    {
        if (jsonParse)
        {
            window.localStorage.setItem(`${key}`, JSON.stringify(value))
        } else
        {
            window.localStorage.setItem(`${key}`, value)
        }
    }

    getProperty(key: string, jsonParse = true)
    {
        let value = window.localStorage.getItem(`${key}`)
        if (value)
        {
            return JSON.parse(value)
        }
    }

}

export default new Storage()
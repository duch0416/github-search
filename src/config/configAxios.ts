import axios, {AxiosResponse} from "axios"

const api = () => {
    const options = {
        baseURL: 'https://api.github.com',
        headers:{
            'Content-Type': 'application/json'
        }
    }

    let instance = axios.create(options)

    instance.interceptors.response.use((response: AxiosResponse) => response)
    return instance
}

export default api()
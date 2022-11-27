import Axios from 'axios'

const API_URL = '/api/Dobrman'

const createDobrman = async (dobrmanData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await Axios.post(API_URL, dobrmanData, config)

    return response.data
}

const getDobrman = async ()=>{
    
    const response = await Axios.get(API_URL)

    return response.data
}

const deleteDobrman = async (dobrmanId, token)=>{
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await Axios.delete(API_URL + "/" + dobrmanId, config)

    return response.data
}

const dobrmanService = {
    createDobrman,
    getDobrman,
    deleteDobrman
}

export default dobrmanService
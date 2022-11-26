import Axios from 'axios'

const API_URL = '/api/News'

const createNews = async (newsData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await Axios.post(API_URL, newsData, config)

    return response.data
}

const getNews = async ()=>{
    
    const response = await Axios.get(API_URL)

    return response.data
}

const deleteNews = async (newsId, token)=>{
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await Axios.delete(API_URL + "/" + newsId, config)

    return response.data
}

const newsService = {
    createNews,
    getNews,
    deleteNews
}

export default newsService
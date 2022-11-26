import Axios  from "axios";


const API_URL = '/api/Dogs'

//Get
const getDogs = async ()=> {
    const response = await Axios.get(API_URL)

    return response.data
}

//Create
const createDogs = async (dogsData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await Axios.post(API_URL, dogsData, config)

    return response.data
}

//Delete

const deleteDogs = async (dogsId, token) =>{
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }

    const response = await Axios.delete(API_URL + "/" + dogsId, config)

    return response.data
}

const dogsService = {
    getDogs,
    createDogs,
    deleteDogs
}

export default dogsService
import Axios  from "axios";


const API_URL = '/api/Ovcak'


//Get
const getOvcak = async ()=> {
    const response = await Axios.get(API_URL)

    return response.data
}

//Create
const createOvcak = async (ovcakData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await Axios.post(API_URL, ovcakData, config)

    return response.data
}

//Delete

const deleteOvcak = async (ovcakId, token) =>{
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }

    const response = await Axios.delete(API_URL + "/" + ovcakId, config)

    return response.data
}

const ovcakService = {
    getOvcak,
    createOvcak,
    deleteOvcak
}

export default ovcakService
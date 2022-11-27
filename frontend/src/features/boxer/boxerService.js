import Axios  from "axios";


const API_URL = '/api/Boxer'


//Get
const getBoxer = async ()=> {
    const response = await Axios.get(API_URL)

    return response.data
}

//Create
const createBoxer = async (boxerData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await Axios.post(API_URL, boxerData, config)

    return response.data
}

//Delete

const deleteBoxer = async (boxerId, token)=>{
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await Axios.delete(API_URL + "/" + boxerId, config)

    return response.data
}
const boxerService = {
    getBoxer,
    createBoxer,
    deleteBoxer
}

export default boxerService
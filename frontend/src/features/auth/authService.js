import Axios from 'axios'

const API_URL = 'http://localhost:3001/api/User'

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }


  const authService = {
    login
  }

  export default authService
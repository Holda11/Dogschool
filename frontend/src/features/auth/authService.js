import Axios from 'axios'

// Uložena Routa
const API_URL = '/api/User/'


//Login funkce = Async, bere do sebe userData
const login = async (userData) => {
    const response = await Axios.post(API_URL + 'login', userData)
  
    //pokud je odpověď data, uložíme lokálně data
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  //Do login funkce == reakce dat
    return response.data
  }

  //Logout = jednoduchý / odstranění položky user neboli tokenu
  const logout = () => {
    localStorage.removeItem('user')
  }

  const authService = {
    login,
    logout
  }

  export default authService
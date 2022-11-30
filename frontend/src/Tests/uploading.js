import axios from 'axios'
import React, { useState } from 'react'


//WORKING
const Uploading = () => {
    const [image, setImage] = useState('')
    const [upload, setUpload] = useState('')
    const uploadFileHandler = async(e)=>{
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUpload(true)
    
        try{
          const config ={
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          const { data } = await axios.post('/api/Upload/', formData, config)
          console.log(data)
          setImage(data)
          setUpload(false)
        }
        catch(error){
          console.log(error)
          setUpload(false)
        }
      }
  return (
    <div>
        <form encType='multipart/form-data'>
            <input type='file' name='image' onChange={uploadFileHandler}/>
        </form>
        
        {image}
    </div>
  )
}

export default Uploading
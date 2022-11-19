import React,{useState} from 'react'
import axios from 'axios'


const NewsPut = () => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const CreateNews = () =>{
        axios.post("http://localhost:3001/createNews", {title, date, image, description }).then((response) =>{alert("Příspěvek přidán")})
    }
  return (
    <>
    <div>
        <input type="text" placeholder="Zadejte Nadpis..." onChange={(event)=>{setTitle(event.target.value)}}/>
        <input type="text" placeholder="Zadejte datum..." onChange={(event)=>{setDate(event.target.value)}}/>
        <input type="text" placeholder="Zadejte odkaz na obrázek..." onChange={(event)=>{setImage(event.target.value)}}/>
        <input type="text" placeholder="Zadejte popis..." onChange={(event)=>{setDescription(event.target.value)}}/>
        <button onClick={CreateNews}>Přidat</button>
    </div>
    </>
  )
}

export default NewsPut
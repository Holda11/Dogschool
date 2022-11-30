import axios from 'axios'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDogs } from '../../../../features/dogs/dogsSlice'


const DogsPut = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  

  const dispatch = useDispatch()


  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createDogs({ name, category, image, description}))
    alert('Přidán Pes')
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='text'>Psy</label>
          <input
            type='text'
            name='text'
            id='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            name='text'
            id='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type='text'
            name='text'
            id='text'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type='text'
            name='text'
            id='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>
            Přidat Psa
          </button>
        </div>
      </form>
    </section>
  )
}

export default DogsPut
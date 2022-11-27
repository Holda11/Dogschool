import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createDobrman} from '../../../../features/dobrman/dobrmanSlice'


const DobrmanPut = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createDobrman({ name, category, image, description}))
    alert('Přidána novinka')
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='text'>Novinka</label>
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
            Přidat Novinku
          </button>
        </div>
      </form>
    </section>
  )
}

export default DobrmanPut
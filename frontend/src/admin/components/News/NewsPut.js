import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createNews } from '../../../features/news/newsSlice'


const NewsPut = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createNews({ title, date, image, description}))
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type='text'
            name='text'
            id='text'
            value={date}
            onChange={(e) => setDate(e.target.value)}
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

export default NewsPut
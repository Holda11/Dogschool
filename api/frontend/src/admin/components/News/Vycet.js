import { useDispatch } from 'react-redux'
import { deleteNews } from '../../../features/news/newsSlice'
import { FaRegTrashAlt } from 'react-icons/fa' 

const Vycet = ({news}) => {
    const dispatch = useDispatch()
  
  
    return (
    <>
    <div>
        <h2>{news.title}</h2>
        <h3>{news.date}</h3>
        <button onClick={()=> dispatch((deleteNews(news._id)))}><FaRegTrashAlt/> </button>
    </div>
    </>
  )
}

export default Vycet
import { useDispatch } from 'react-redux'
import { deleteDobrman } from '../../../../features/dobrman/dobrmanSlice'
import { FaRegTrashAlt } from 'react-icons/fa' 

const DobrmanVycet = ({dobrman}) => {
    const dispatch = useDispatch()
  
  
    return (
    <>
    <div>
        <h2>{dobrman.name}</h2>
        <h3>{dobrman.category}</h3>
        <button onClick={()=> dispatch((deleteDobrman(dobrman._id)))}><FaRegTrashAlt/> </button>
    </div>
    </>
  )
}

export default DobrmanVycet
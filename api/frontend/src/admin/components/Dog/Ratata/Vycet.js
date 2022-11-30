import { useDispatch } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa' 
import { deleteDogs } from '../../../../features/dogs/dogsSlice'

const VycetPsu = ({dogs}) => {
    const dispatch = useDispatch()
  
  
    return (
    <>
    <div>
        <h2>{dogs.name}</h2>
        <h3>{dogs.category}</h3>
        <button onClick={()=> dispatch((deleteDogs(dogs._id)))}><FaRegTrashAlt/> </button>
    </div>
    </>
  )
}

export default VycetPsu
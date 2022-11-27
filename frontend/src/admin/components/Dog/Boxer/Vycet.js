import { useDispatch } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa' 
import { deleteBoxer } from '../../../../features/boxer/boxerSlice'

const VycetBoxer = ({boxer}) => {
    const dispatch = useDispatch()
  
  
    return (
    <>
    <div>
        <h2>{boxer.name}</h2>
        <h3>{boxer.category}</h3>
        <button onClick={()=> dispatch((deleteBoxer(boxer._id)))}><FaRegTrashAlt/> </button>
    </div>
    </>
  )
}

export default VycetBoxer
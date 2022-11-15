import React, { useContext } from 'react'
import { ContextApi } from '../Context/ContextApi'


const Pagination = () => {
  const{page,nbPages,dispatch }=useContext(ContextApi)

  const previousPage=()=>{
    dispatch({
      type:"PREV-PAGE",
    
    })
  }

  const nextPage=()=>{
    dispatch({
      type:"NEXT-PAGE",
    
    })
  }
    
  return (
    <div className='pagination-btn'>
      <button onClick={()=>previousPage()}>Prev</button>
      <p>{page+1} of {nbPages}</p>
      <button onClick={()=>nextPage()}>Next</button>
    </div>
  )
}

export default Pagination
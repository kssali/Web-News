import React, { useContext } from 'react'
import { ContextApi } from '../Context/ContextApi'

const Search = () => {
  const { query, dispatch  } = useContext(ContextApi);

  const SerachItem=(searchData)=>{
    dispatch({type:"SEARCH-ITEM",payload:searchData})
  }


  return (
    <div>
        <h1>Today News</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Search Here...'  value={query} onChange={(e)=>SerachItem(e.target.value)}/>
      </form>
    </div>
  )
}

export default Search
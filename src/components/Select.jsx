import React, { useContext, useState } from "react"
import { StoreContext } from "../store/StoreProvider"
import { actionTypes } from "../store/StoreReducer"
import "../styles/select.css"

const Select = () => {

  const [, dispatch] = useContext(StoreContext)
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  const [filterActive, setFilterActive] = useState(false)

  const handleSelect = (region) => {
    let listRegion
    if(region.toLowerCase() === ''){
      listRegion = 'https://restcountries.eu/rest/v2/all'
    }else{
      listRegion = `https://restcountries.eu/rest/v2/region/${region.toLowerCase()}`
    }
    fetch(listRegion)
      .then((respone) => respone.json())
      .then((data) => 
        dispatch({
          type: actionTypes.FILTER_COUNTRY,
          payload: data 
        })
      )
  }


  return (
    <div className="select-region">
      <p onClick={() => setFilterActive(!filterActive)} className='select-title'>Filter By Region <i className="fas fa-angle-down"></i></p>
      {filterActive && 
        <div className="options">
          {regions.map((region) => (
            <p
            className='option half-margin-bottom'
            key={region}
            onClick={() => handleSelect(region)}
            >
              {region}
            </p>
          ))}
        </div>
      }
    </div>
  )
}

export default Select

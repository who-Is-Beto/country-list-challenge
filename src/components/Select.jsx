import React, { useContext } from "react"
import { StoreContext } from "../store/StoreProvider"
import { actionTypes } from "../store/StoreReducer"
import "../styles/select.css"

const Select = () => {

  const [, dispatch] = useContext(StoreContext)

  const handleSelect = (event) => {
    let listRegion
    if(event.target.value === ''){
      listRegion = 'https://restcountries.eu/rest/v2/all'
    }else{
      listRegion = `https://restcountries.eu/rest/v2/region/${event.target.value}`
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
    <select onChange={handleSelect} className="select">
      <option className="option" value="">
        Filter By Region
      </option>
      <option className="option" value="africa">
        Africa
      </option>
      <option className="option" value="americas">
        Americas
      </option>
      <option className="option" value="asia">
        Asia
      </option>
      <option className="option" value="europe">
        Europe
      </option>
      <option className="option" value="oceania">
        Oceania
      </option>
    </select>
  )
}

export default Select

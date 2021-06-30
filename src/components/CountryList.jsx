/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import CardCountry from "./CardCountry"
import "../styles/CountryList.css"
import { actionTypes } from "../store/StoreReducer"
import { StoreContext } from "../store/StoreProvider"
import Select from "./Select"
import { Link } from "react-router-dom"

function CountryList() {
  const [store, dispatch] = useContext(StoreContext)
  const API = "https://restcountries.eu/rest/v2/all"
  useEffect(() => {
    fetch(API)
      .then((resone) => resone.json())
      .then((data) =>
        dispatch({
          type: actionTypes.FETCH_ALL_DATA,
          payload: data,
        })
      )
  }, [])
  return (
    <div className="country-list-container">
      <Select />
      {store.CountryList.map((item) => (
        <Link key={item.name} to={`/country/${item.alpha2Code.toLowerCase()}`}>
          <CardCountry {...item} />
        </Link>
      ))}
    </div>
  )
}

export default CountryList

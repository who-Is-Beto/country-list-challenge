/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, Suspense } from "react"
import CardCountry from "./CardCountry"
import { actionTypes } from "../store/StoreReducer"
import { StoreContext } from "../store/StoreProvider"
import { Link } from "react-router-dom"
import "../styles/CountryList.css"

function CountryList() {
  const [store, dispatch] = useContext(StoreContext)
  const { CountryList, filteredList } = store

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

  let list

  if(filteredList.length > 0) {
    list = filteredList
  }else {
    list = CountryList
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
    <div className="country-list-container">
      {list.map((item) => (
        <Link key={item.name} to={`/country/${item.alpha2Code.toLowerCase()}`}>
          <CardCountry {...item} />
        </Link>
      ))}
    </div>
      </Suspense>
  )
}

export default CountryList

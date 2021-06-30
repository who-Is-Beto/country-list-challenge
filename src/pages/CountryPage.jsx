/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StoreContext } from '../store/StoreProvider'
import { actionTypes } from '../store/StoreReducer'
import '../styles/CountryPage.css'

const CountryPage = () => {
  const { id } = useParams()
  const [store, dispatch] = useContext(StoreContext)
  console.log(store)
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
      .then((respone) => respone.json())
      .then((data) => dispatch({
        type: actionTypes.FETCH_COUNTRY_DATA,
        payload: data
      }))
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
  }, [])
  return (
    <>
      <div className="wrapper">
        <div className="info-container">
        <Link to='/'>
          <div className="back-button">
            <p><i className="fas fa-long-arrow-alt-left"></i> Back</p>
          </div>
        </Link>

          <div className="country-img">
            <div className="country-info-image-container">
              <img className="country-info-image" src={store.country.flag} alt={store.country.name} />
            </div>
          </div>
          <div className="contry-info">
            <h3 className="margin-bottom">{store.country.name}</h3>
            <p className="margin-bottom">
              <strong className="country-data-title">Native Name: </strong>
              {store.country.nativeName}
            </p>
            <p className="margin-bottom">
              <strong className="country-data-title">Population: </strong>
              {store.country.population}
            </p>
            <p className="margin-bottom">
              <strong className="country-data-title">Region: </strong>
              {store.country.region}
            </p>
            <p className="margin-bottom">
              <strong className="country-data-title">Sub Region: </strong>
              {store.country.subregion}
            </p>
            <p className="margin-bottom">
              <strong className="country-data-title">Capital: </strong>
              {store.country.capital}
            </p>
          </div>
          <div className="sub-info">
            <p className="margin-bottom">
              <strong className="country-data-title">Top Level Domain: </strong>
              {store.country.topLevelDomain}
            </p>
            <p className="margin-bottom">
              <strong className="country-data-title">Currencies: </strong>
              {store.country.currencies && store.country.currencies.map((item) => 
                <span key={item.name}>{item.name}</span>)}
            </p>
            <p className="margin-bottom">
              <strong className="country-data-title">Languages: </strong>
              {store.country.languages && store.country.languages.map((item) => 
                <span key={item.name}>{item.name} </span>)}
            </p>
          </div>

          <div className="country-info-border">
            <h3 className="margin-bottom">Border Countries:</h3>
            <div className="flex">
              {store.country.borders && store.country.borders.map((item) => 
                <div className="back-button">
                  <p>{item}</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CountryPage

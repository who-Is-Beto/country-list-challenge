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
          <div className="back-button">
        <Link to='/'>
            <p><i className="fas fa-long-arrow-alt-left"></i> Back</p>
        </Link>
          </div>
          <div className="country-info">
            <div className="country-info-image-container half-margin bottom">
              <img className='country-info-image'
              src={store.country.flag} alt={`${store.country.flag} flag`} />
            </div>

            <div className="country-info-text">
              <h3 className='half-margin-bottom country-info-name'>{store.country.name}</h3>
              <div className="country-content">
                <div className="country-info-text-left">
                  <p className='half-margin-bottom'><strong>Native Name: </strong>{store.country.nativeName}</p>
                  <p className='half-margin-bottom'><strong>Population: </strong>{store.country.population}</p>
                  <p className='half-margin-bottom'><strong>Region: </strong>{store.country.region}</p>
                  <p className='half-margin-bottom'><strong>Sub Region: </strong>{store.country.subregion}</p>
                  <p className='half-margin-bottom'><strong>Capital: </strong>{store.country.capital}</p>
                </div>
                <div className="country-info-text-right">
                  <p className='half-margin-bottom'><strong>Top Level Domain: </strong>
                  {store.country.topLevelDomain && store.country.topLevelDomain[0]}</p>
                  <p className='half-margin-bottom'><strong>Currencies: </strong>
                  {store.country.currencies && `${store.country.currencies[0].name} ${store.country.currencies[0].symbol}`}</p>
                  <p className='half-margin-bottom sub-info'><strong>Languages: </strong>
                  {store.country.languages && store.country.languages.map((lenguaje) => <span key={lenguaje.iso639_1}>{lenguaje.name} </span>)}</p>
                </div>
              </div>
              <div className="country-info-border">
              <h4 className='borders-title'>Border Contries:</h4>
                <div className="borders">
                  {store.country.borders && store.country.borders.length > 0
                    ? store.country.borders.map((country) => <p key={country} className='back-button country-border'>{country}</p>)
                    : <p>This country does not have border with other country :c</p>
                  }
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default CountryPage

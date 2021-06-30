const actionTypes = {
  FETCH_ALL_DATA: "FETCH_ALL_DATA",
  FETCH_COUNTRY_DATA: "FETCH_COUNTRY_DATA",
  FILTER_COUNTRY: 'FILTER_COUNTRY'
}

const initialState = {
  CountryList: [],
  country: {},
  isLoad: false,
  darkMode: true,
}

const storeReducer = (store, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_DATA:
      return {
        ...store,
        CountryList: action.payload,
      }
      case actionTypes.FETCH_COUNTRY_DATA:
        return {
          ...store,
          country: action.payload
        }
      case actionTypes.FILTER_COUNTRY:
      let list
      if (action.payload !== '') {
        list = store.coutryFilteredByRegion
      } else {
        list = store.countryList
      }
      const countryListByName = list.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()))
      return { ...store, countryListByName }
    default:
      return store
  }
}

export { initialState, actionTypes }
export default storeReducer

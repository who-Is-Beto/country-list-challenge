const actionTypes = {
  FETCH_ALL_DATA: "FETCH_ALL_DATA",
  FETCH_COUNTRY_DATA: "FETCH_COUNTRY_DATA",
  FILTER_COUNTRY: 'FILTER_COUNTRY',
  SEARCH_COUNTRY: 'SEARCH_COUNTRY'
}

const initialState = {
  CountryList: [],
  filteredList: [],
  InoputValue: '',
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
      case actionTypes.SEARCH_COUNTRY:
      let list
      
      list = store.CountryList.filter((country) => country.name.toLowerCase().includes(action.payload.toLowerCase()))

        console.log('payload: ', action.payload, 'Filtered: ', store.filteredList, 'Filtro: ', list)
        return {
          ...store,
          filteredList: list
        }
        case actionTypes.FILTER_COUNTRY:
          return {
            ...store,
            InputValue: action.payload
          }
    default:
      return store
  }
}

export { initialState, actionTypes }
export default storeReducer

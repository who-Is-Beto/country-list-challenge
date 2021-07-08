const actionTypes = {
  FETCH_ALL_DATA: "FETCH_ALL_DATA",
  FETCH_COUNTRY_DATA: "FETCH_COUNTRY_DATA",
  FILTER_COUNTRY: 'FILTER_COUNTRY',
  SEARCH_COUNTRY: 'SEARCH_COUNTRY',
  CHANGE_DARK_MODE: 'CHANGE_DARK_MODE'
}

const initialState = {
  CountryList: [],
  filteredList: [],
  regionList: [],
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
        if(store.regionList.length > 0){
          list = store.regionList.filter((country) => country.name.toLowerCase().includes(action.payload.toLowerCase()))
        }else{
          list = store.CountryList.filter((country) => country.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
        return {
          ...store,
          filteredList: list
        }
        case actionTypes.FILTER_COUNTRY:
          return {
            ...store,
            regionList: action.payload,
            filteredList: action.payload
          }
        case actionTypes.CHANGE_DARK_MODE:
          return {
            ...store,
            darkMode: !store.darkMode
          }
    default:
      return store
  }
}

export { initialState, actionTypes }
export default storeReducer

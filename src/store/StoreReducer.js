const actionTypes = {
  FETCH_ALL_DATA: 'FETCH_ALL_DATA',
  FETCH_DATA: 'FETCH_DATA',
}

const initialState = {
  CountryList: [],
  country: {},
  darkMode: true
}

const storeReducer = (store, action) => {
  switch (action.type) {
    default:
      return store
  }
}

export { initialState, actionTypes }
export default storeReducer
const actionTypes = {
  FETCH_ALL_DATA: "FETCH_ALL_DATA",
  FETCH_DATA: "FETCH_DATA"
};

const initialState = {
  CountryList: [],
  country: {},
  isLoad: false,
  darkMode: true
};

const storeReducer = (store, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_DATA:
      console.log(action.payload);
      return {
        ...store,
        CountryList: action.payload
      };

    default:
      return store;
  }
};

export { initialState, actionTypes };
export default storeReducer;

import React, { useContext, useEffect } from "react";
import CardCountry from "./CardCountry";
import "../styles/CountryList.css";
import { actionTypes } from "../store/StoreReducer";
import { StoreContext } from "../store/StoreProvider";

function CountryList() {
  const [store, dispatch] = useContext(StoreContext);
  const API = "https://restcountries.eu/rest/v2/all";
  useEffect(() => {
    fetch(API)
      .then((resone) => resone.json())
      .then((data) =>
        dispatch({
          type: actionTypes.FETCH_ALL_DATA,
          payload: data
        })
      );
  }, []);
  return (
    <div className="country-list-container">
      {store.CountryList.map((item) => (
        <CardCountry key={item.name} {...item} />
      ))}
    </div>
  );
}

export default CountryList;

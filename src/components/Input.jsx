import React, { useContext, useRef, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import { actionTypes } from "../store/StoreReducer";
import "../styles/InputComponent.css";
function Input() {
  const [store, dispatch] = useContext(StoreContext)
  const [value, setValue] = useState('')
  const SearchInput = useRef(null)
  const countryFiltered = store.CountryList.filter((user) => {
    return user.name.toLowerCase().includes(value.toLocaleLowerCase())
  })

  const handleSearch = (event) => {
        dispatch({
          type: actionTypes.FILTER_COUNTRY,
          payload: countryFiltered,
        })
    setValue(event.target.value)
  }

  return (
    <div className="inputContainer">
      <div className="inputStuffContainer">
        <button>
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          reference={SearchInput}
          placeholder={"Search your country"}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Input;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import { actionTypes } from "../store/StoreReducer";
import "../styles/InputComponent.css";
import Select from "./Select";
function Input() {
  const [, dispatch] = useContext(StoreContext)
  const [inputValue, setInputValue] = useState('')
  const SearchInput = useRef(null)
  
  useEffect(() => {
    dispatch({
      type: actionTypes.SEARCH_COUNTRY,
      payload: inputValue, 
    })
  }, [inputValue])
  
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
          onChange={(event) =>  setInputValue(event.target.value)}
          value={inputValue}
        />
      </div>
      <Select />
    </div>
  );
}

export default Input;

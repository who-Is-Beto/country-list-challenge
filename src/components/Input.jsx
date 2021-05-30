import React from "react";
import "../styles/InputComponent.css";
function Input() {
  return (
    <div className="inputContainer">
      <div className="inputStuffContainer">
        <button>
          <i className="fas fa-search"></i>
        </button>
        <input type="text" placeholder={"Search your country"} />
      </div>
    </div>
  );
}

export default Input;

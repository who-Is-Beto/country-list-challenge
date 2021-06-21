import React from "react"
import "../styles/select.css"

const Select = () => {
  return (
    <select className="select">
      <option className="option" value="all">
        Filter By Region
      </option>
      <option className="option" value="africa">
        Africa
      </option>
      <option className="option" value="americas">
        Americas
      </option>
      <option className="option" value="asia">
        Asia
      </option>
      <option className="option" value="europe">
        Europe
      </option>
      <option className="option" value="oceania">
        Oceania
      </option>
    </select>
  )
}

export default Select

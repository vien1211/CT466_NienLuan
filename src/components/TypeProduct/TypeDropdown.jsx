import React from 'react'
import NavDropdown from "react-bootstrap/NavDropdown";
import TypeProduct from "./TypeProduct";
const TypeDropdown = ({types}) => {
  return (
    <NavDropdown title="Types" id="types-dropdown">
        {types.map((type, index) => (
            <NavDropdown.Item key ={index}>
                <TypeProduct name = {type.name} />
            </NavDropdown.Item>
        ))}
    </NavDropdown>
  )
}

export default TypeDropdown
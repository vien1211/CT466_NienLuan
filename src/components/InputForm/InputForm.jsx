import React from 'react'
import Form from "react-bootstrap/Form";

const InputForm = ({type, placeholder, ariaLabel, size, ...rests}) => {
  return (
    <div>
        <Form.Control
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          size={size}
          {...rests}
        />
      </div>
  )
}

export default InputForm
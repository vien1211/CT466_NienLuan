import React, {useState} from 'react'
import { Input } from "antd";
const FormInput = ({props}) => {
    const [valueInput, setValueInput] = useState('')
    const {placeholder = 'Nhập...'} = props
    return (
        <Input placeholder={placeholder} valueInput={valueInput}/>
        
    )
}

export default FormInput
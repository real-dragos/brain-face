import React from 'react';
import './InputForm.css';

const InputForm = ({ data, changeHandler }) => {
    return (
        <div className={'inputForm'}>
            <label htmlFor={data.id}>{data.label}</label>
            <input {...data} onChange={changeHandler} />
        </div>
    )
}

export default InputForm;
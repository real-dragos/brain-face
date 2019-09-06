import React from 'react';
import InputForm from './InputForm/InputForm';
import './Form.css';

const Form = ({className, title, inputs, buttonText, onSubmit, changeHandler}) => {

    return (
        <form onSubmit={(event) => onSubmit(inputs, event)} className={'form ' + className}>
            {title !== '' ? <h1>{title}</h1> : null}
            {
                Object.keys(inputs).map((key) => {
                    return <InputForm key={key} data={inputs[key]} changeHandler={(event) => changeHandler(event, key)} />
                })
            }
            <button>{buttonText}</button>
        </form>
    )

}

export default Form;
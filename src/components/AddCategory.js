import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }else{
            console.warn('length is invalid')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{inputValue}</h2>
            <input
                type='text'
                value={inputValue}
                onChange={handleImputChange}
                placeholder='Busque un gif'
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


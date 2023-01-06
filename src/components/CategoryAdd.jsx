import React, { useState } from 'react'
import PropTypes from "prop-types";

export const CategoryAdd = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => setInputValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if(inputValue.trim().length > 1) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>CategoryAdd</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}


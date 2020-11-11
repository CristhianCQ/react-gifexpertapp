import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //  console.log(e.target.value);
          
         setInputValue(e.target.value);
        //  console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => {
         e.preventDefault();  

         if (InputValue.trim().length > 2) {
            setCategories(cats=> [ InputValue,...cats]);
             // props.setCategories(cats=> [...cats, InputValue]);
            setInputValue('') ;
         }

        
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{ InputValue}</p>
            <input
                type="text"
                value={InputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired  
}
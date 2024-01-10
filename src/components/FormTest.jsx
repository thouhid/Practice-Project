import React, { useState } from 'react';

const FormTest = ({ totalCount }) => {
    const [name, setName] = useState('Ravi');
    const [nameLengthError, setNameLengthError] = useState('');
    const handleChange = (e) =>{
        e.preventDefault();
        const value = e.target.value;
        setName(value);
    }

    return (
        <div>
            <div>
                Name:
                <input type='text' value={name} onChange={handleChange}/>
            </div>
            <div>Name is: {name}</div>
            <span>{nameLengthError}</span>
        </div>
    );
}
 
export default FormTest;
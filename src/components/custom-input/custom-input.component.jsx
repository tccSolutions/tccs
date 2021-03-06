import React from 'react';
import './custom-input.styles.scss'

export const CustomInput = ({handleChange, label, ...otherProps})=>(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
            :null
        }

    </div>
)
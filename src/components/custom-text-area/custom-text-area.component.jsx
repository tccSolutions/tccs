import React from 'react';
import './custom-text-area.styles.scss'

export const CustomTextArea = ({handleChange, label, ...otherProps})=>(
    <div className='group'>
        <textarea className='form-text-area' onChange={handleChange} {...otherProps}/>
        {
            label ?
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
            :null
        }

    </div>
)
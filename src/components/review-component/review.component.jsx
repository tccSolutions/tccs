import React from 'react';
import './review.styles.scss';

export const Review=({name,comment,date})=>(    
    <div className='review'>
        <h3 className='name'>{name}</h3>
        <span className='comment'>{comment}</span>
        <p className='date'>{date}</p>
    </div>
)
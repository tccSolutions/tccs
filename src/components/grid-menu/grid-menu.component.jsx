import React from 'react';
import { LinkCube } from '../link-cube/link-cube.component';
import './grid-menu.styles.scss'
import email from  '../../assets/email.png'
import about from  '../../assets/about.png'
import review from  '../../assets/reviews.png'


export const GridMenu = () => (
    <div className='grid-menu'>
        <LinkCube path='contactus' img={email} title='Contact Us'/>
        <LinkCube path='about' img={about} title='About Us'/>
        <LinkCube path='reviews' img={review} title='Reviews'/>
    </div>
)
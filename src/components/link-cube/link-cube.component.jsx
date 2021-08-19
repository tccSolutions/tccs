import React from 'react'
import { Link } from 'react-router-dom'
import './link-cube.styles.scss'


export const LinkCube = ({path, img, title}) =>(
   <Link to={`/${path}`} className ='link-cube'>
       <div className ='container'>
           <img src={img} alt='link'/>
           <a className='title'href={path}>{title}</a>
       </div>
   </Link>
)

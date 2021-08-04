import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <div className='links'>
                <a href='#' className='foot-insights active' >Foot-Insights</a> &nbsp;
                <Link to='/hyperlocal'>Hyperlocal Intelligence</Link>&nbsp;
                <Link to='/advertising'>Advertising</Link>&nbsp;
               
               
            </div>


            <div className='right-side'>
                <Link to='/useraccount'>
                <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" className='profilePic' />
                 </Link>&nbsp;
                 XYZ Corp
            </div>
        </div>
    )

}

export default Nav
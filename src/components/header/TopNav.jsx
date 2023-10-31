import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    return (
        <>
            <header className='header_top'>
                <div className='container'>
                    <ul className='left_nav'>
                        <li className='nav_list_item'><Link to='#' className='btn'>kampaniyalar</Link></li>
                        <li className='nav_list_item'><Link to='#' className='btn'>mağazalar</Link></li>
                        <li className='nav_list_item'><Link to='#' className='btn'>korporativ</Link></li>
                        <li className='nav_list_item'><Link to='#' className='btn'><img src="" alt="" srcset="" /></Link></li>
                        <li className='nav_list_item'><Link to='#' className='btn'><img src="" alt="" srcset="" /></Link></li>
                        <li className='nav_list_item'><Link to='#' className='btn btn-orange'>outlet</Link></li>
                    </ul>
                    <ul className='right_nav'>
                        <li className='right_list_item'><Link to=''></Link></li>
                        <li className='right_list_item'><Link to=''></Link></li>
                        <li className='right_list_item'><Link to=''>şəxsi kabinet</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default TopNav
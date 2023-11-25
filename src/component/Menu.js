import React from 'react'
import { faAngleDown, faAngleLeft, faBell, faBitcoinSign, faCompass, faDollarSign, faEllipsisVertical, faGear, faWallet } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu-item'>
                <div className='menu-text'>Edit</div>
                <div>
                    <FontAwesomeIcon icon={faAngleLeft} className='menu-icon' />
                </div>

            </div>
            <hr className='hr' />
            <div className='menu-item'>
                <div className='menu-text'>Courier Iinfo</div>
                <div>
                    <FontAwesomeIcon icon={faAngleLeft} className='menu-icon' />
                </div>

            </div>
            <hr className='hr' />
            <div className='menu-item'>
                <div className='menu-text'>Share</div>
                <div>
                    <FontAwesomeIcon icon={faAngleLeft} className='menu-icon' />
                </div>

            </div>
            <hr className='hr' />
            <div className='menu-item'>
                <div className='menu-text'>Remove</div>
                <div>
                    <FontAwesomeIcon icon={faAngleLeft} className='menu-icon' />
                </div>

            </div>

        </div>
    )
}

export default Menu

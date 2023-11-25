import React from 'react'
import { faAngleDown, faAngleLeft, faBell, faBitcoinSign, faCompass, faDollarSign, faEllipsisVertical, faGear, faWallet } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <FontAwesomeIcon icon={faWallet} className='active' />
                <FontAwesomeIcon icon={faCompass} className='inactive-icon' />
                <FontAwesomeIcon icon={faBell} className='inactive-icon' />
                <FontAwesomeIcon icon={faGear} className='inactive-icon' />

            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faBell, faBitcoinSign, faCompass, faDollarSign, faEllipsisVertical, faGear, faWallet } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon


const Header = (props) => {
    return (
        <div className='header' >
            <div className='percent' >
                <FontAwesomeIcon icon={faAngleLeft} className='back-icon' />
            </div>
            <div className='headerText'>
                Bitcoin Wallet
            </div>
            <div >
                <FontAwesomeIcon icon={faEllipsisVertical} className='toggle-icon' onClick={props?.toggleDropdown} />
                {props?.isDropdownVisible && (
                    <Menu />

                )}
            </div>
        </div>
    )
}

export default Header

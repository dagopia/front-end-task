import React from 'react'
import { faAngleDown, faAngleLeft, faBell, faBitcoinSign, faCompass, faDollarSign, faEllipsisVertical, faGear, faWallet } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const BuySellCard = () => {
    return (
        <div className='buy-contianer'>
            <div className='buy-card'>
                <div className='icon-container' >
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <div className='card-text'>Buy BTC</div>
            </div>
            <div className='small-card'>
                <div className='sell-icon' >
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <div className='card-text'>Sell BTC</div>
            </div>

        </div>
    )
}

export default BuySellCard

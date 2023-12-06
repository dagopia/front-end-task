import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faBell, faBitcoinSign, faCompass, faDollarSign, faEllipsisVertical, faGear, faWallet } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

import React, { useEffect, useState } from 'react'
import './task.scss'
import Menu from './Menu';
import RechartComponent from './RechartComponent';
import BuySellCard from './BuySellCard';
import Footer from './Footer';
import Header from './Header';

export default function BitCoin() {
    const [isSecondDivVisible, setSecondDivVisible] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [overlayBg, setoverlayBg] = useState(false);
    const [selectedDate, setSelectedDate] = useState('d');

    const handleIconClick = () => {
        setSecondDivVisible(!isSecondDivVisible);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        setoverlayBg(!overlayBg)

    };
    const handleClick = () => {
        setShowDetails(!showDetails);
    };
    return (
        <>

            {overlayBg ? <div className='overlay' >
            </div> : null}
            <div style={{ height: '100vh' }}>
                <Header
                    toggleDropdown={toggleDropdown}
                    isDropdownVisible={isDropdownVisible}
                />

                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='bitcoin' >
                                    <FontAwesomeIcon icon={faBitcoinSign} className='btc-icon' />
                                </div>
                                <div className='bitcoin-text'>Bitcoin</div>
                            </div>
                            <div className='bitcoin-text-abbrevation'>BTC</div>
                        </div>
                        <div className='amount'>
                            3.524864568 BTC
                        </div>
                        <div className='convertion-container'>
                            <div className='convertion-amount'>
                                $19.153 USD
                            </div>
                            <div className='percent-convertion'>-2.32%</div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faAngleDown} className='down-icon' onClick={handleIconClick} />
                        </div>

                    </div>


                    {isSecondDivVisible && (
                        <div className='menu-visible'>
                            <div onClick={() => setSelectedDate('d')} style={{ backgroundColor: selectedDate === 'd' ? '#aeb8c4' : '', paddingInline: '10px', color: selectedDate === 'd' ? 'white' : 'gray', fontWeight: 400, borderRadius: '12px', fontSize: '13px', height: '25px', display: 'flex', alignItems: 'center' }} >Day</div>
                            <div onClick={() => setSelectedDate('w')} style={{ backgroundColor: selectedDate === 'w' ? '#aeb8c4' : '', paddingInline: '10px', color: selectedDate === 'w' ? 'white' : 'gray', borderRadius: '12px', fontSize: '13px', height: '25px', display: 'flex', alignItems: 'center' }}>Week</div>
                            <div onClick={() => setSelectedDate('m')} style={{ backgroundColor: selectedDate === 'm' ? '#aeb8c4' : '', paddingInline: '10px', color: selectedDate === 'm' ? 'white' : 'gray', fontWeight: 400, borderRadius: '12px', fontSize: '13px', height: '25px', display: 'flex', alignItems: 'center' }}>Month</div>
                            <div onClick={() => setSelectedDate('y')} style={{ backgroundColor: selectedDate === 'y' ? '#aeb8c4' : '', paddingInline: '10px', color: selectedDate === 'y' ? 'white' : 'gray', fontWeight: 400, borderRadius: '12px', fontSize: '13px', height: '25px', display: 'flex', alignItems: 'center' }}>Year</div>
                        </div>
                    )}

                    <RechartComponent
                        selectedDate={selectedDate}
                    />
                    <BuySellCard />
                </div>


                <Footer />
            </div >
        </>
    )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faBell, faBitcoinSign, faCompass, faDollarSign, faEllipsisVertical, faGear, faWallet } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import './task.scss'
import Menu from './Menu';
const data = [
    {
        "name": "Page E",
        "uv": 3000,
        "pv": 30,
        "amt": 2181
    },
    {
        "name": "Page D",
        "uv": 4000,
        "pv": 60,
        "amt": 2000
    },
    {
        "name": "Page C",
        "uv": 6000,
        "pv": 60,
        "amt": 2290
    },
    {
        "name": "Page B",
        "uv": 9000,
        "pv": 70,
        "amt": 2210
    },
    {
        "name": "Page A",
        "uv": 10000,
        "pv": 90,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 9000,
        "pv": 85,
        "amt": 2210
    },
    {
        "name": "Page A",
        "uv": 10000,
        "pv": 85,
        "amt": 2400
    }
];
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

                <div className='header' >
                    <div className='percent' >
                        <FontAwesomeIcon icon={faAngleLeft} className='back-icon' />
                    </div>
                    <div className='headerText'>
                        Bitcoin Wallet
                    </div>
                    <div >
                        <FontAwesomeIcon icon={faEllipsisVertical} className='toggle-icon' onClick={toggleDropdown} />
                        {isDropdownVisible && (
                          <Menu/>
                            
                        )}
                    </div>
                </div>

                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='bitcoin' >
                                    <FontAwesomeIcon icon={faBitcoinSign}  className='btc-icon'/>
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
                            <div  className='percent-convertion'>-2.32%</div>
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
                    <div className='chart-container'>
                        <div className='dot-container'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='red-dot' >

                                </div>
                                <div className='rate'>Lower: $ {selectedDate === "d" ? 1.1234 : 98989}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='rate-amount' >

                                </div>
                                <div className='rate'>Higher: $ {selectedDate === "d" ? 32342 : 12412}</div>
                            </div>
                        </div>

                        <div className='rechart-container'>
                            <CartesianGrid strokeDasharray="3 3" />
                            <LineChart width={250} height={90} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                                <Line type="monotone" dataKey="pv" stroke="orange" strokeWidth={4} />
                            </LineChart>
                            <div className='rechart-amount'>
                                <div className='btc-value' ></div>
                                <div className='re-amount'>1BTC = $5.483</div>
                            </div>
                        </div>

                    </div>
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
                </div>

                <div className='footer-container'>
                    <div className='footer'>
                        <FontAwesomeIcon icon={faWallet} className='active' />
                        <FontAwesomeIcon icon={faCompass} className='inactive-icon' />
                        <FontAwesomeIcon icon={faBell} className='inactive-icon' />
                        <FontAwesomeIcon icon={faGear} className='inactive-icon' />

                    </div>
                </div>

            </div >
        </>
    )
}

import React from 'react'
import { Area, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

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
const RechartComponent = (props) => {
    return (
        <div className='chart-container'>
            <div className='dot-container'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='red-dot' >

                    </div>
                    <div className='rate'>Lower: $ {props?.selectedDate === "d" ? 1.1234 : 98989}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='rate-amount' >

                    </div>
                    <div className='rate'>Higher: $ {props?.selectedDate === "d" ? 32342 : 12412}</div>
                </div>
            </div>

            <div className='rechart-container'>

                <LineChart width={250} height={90} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    strokeWidth={4}


                    <Area type="monotone" dataKey="pv" stroke="orange" fill="red" />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="orange"
                        dot={(props) => {
                            const { cx, cy, payload, index } = props;
                            const isFirstPoint = index === 0;
                            const isLastPoint = index === data.length - 1;

                            if (isLastPoint) {
                                return (
                                    <g>
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={8}
                                            stroke="orange"
                                            fill="orange"
                                            opacity={0.5}
                                        />
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={5}
                                            fill="orange"
                                        />
                                    </g>
                                );
                            }

                            return null;
                        }}
                    />
                </LineChart>
                <div className='rechart-amount'>
                    <div className='btc-value' ></div>
                    <div className='re-amount'>1BTC = $5.483</div>
                </div>
            </div>

        </div>
    )
}

export default RechartComponent

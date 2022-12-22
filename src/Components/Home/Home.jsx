import React from 'react'
import { Button, Button2 } from '../Inputs/Inputs'
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div id="step1">
                <Button title='Pay with Card' onClick={() => console.log('clicked')} />
                <Button title='Pay with Bank Transfer' onClick={() => console.log('clicked')} />
                <Button2 className="bg-bk" title='Pay with NestPay' onClick={() => console.log('clicked')} />
            </div>

            <div id="step2">

            </div>

        </div>
    )
}

export default Home
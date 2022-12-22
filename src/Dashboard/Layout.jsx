import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './Dashboard.scss'

const Layout = ({ Children }) => {
    return (
        <div className='dashboard'>
            <Header />
            <div className="dashboard__children">
                {Children}
            </div>
            <Sidebar />

        </div>
    )
}

export default Layout
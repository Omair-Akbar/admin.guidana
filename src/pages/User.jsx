import React from 'react'
// import Navbar from '../components/CRM/common/Navbar'
import MainUser from '../components/User/MainUser'
import Navbar from '../components/common/Navbar'

const Dashboard = () => {
    return (
        <div className="flex">
            <Navbar />
            <div className="min-h-screen w-full">
                <MainUser />
            </div>
        </div>
    )
}

export default Dashboard
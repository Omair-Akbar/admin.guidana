import React from 'react'
import Navbar from "../components/common/Navbar"
import MainDashboard from "../components/Dashboard/MainDashboard"
const Dashboard = () => {
    return (
        <div className="flex">
            <Navbar />
            <div className="min-h-screen w-full">
                <MainDashboard />
            </div>
        </div>
    )
}

export default Dashboard

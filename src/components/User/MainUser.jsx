import React from 'react'
import Header from '../common/Header'
import UserTable from './UserTable'

const MainUser = () => {

    return (
        <div className="ml-14 md:ml-24 p-3 md:p-6">
            <Header heading="Manage Accounts" />
            <UserTable />
        </div>
    )
}

export default MainUser

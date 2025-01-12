import React from 'react'
import Navbar from '../components/common/Navbar';
import MainAction from '../components/User/MainAction';

const UserAction = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="min-h-screen w-full">
        <MainAction />
      </div>
    </div>
  )
}

export default UserAction

import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import MainAction from '../components/User/MainAction';
// import Navbar from '../components/CRM/common/Navbar';
// import MainAction from '../components/CRM/User/MainAction';

const UserAction = () => {
  const { userId } = useParams()
  return (
    <div className="flex">
      <Navbar />
      <div className="min-h-screen w-full">
        <MainAction id={userId} />
      </div>
    </div>
  )
}

export default UserAction

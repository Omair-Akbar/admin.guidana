'use client'

import { useState } from 'react'
import { IoIosSearch, IoIosStar } from "react-icons/io";
import { users as initialUsers } from '../common/StaticData'
import { RiArrowDownSLine } from 'react-icons/ri';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { AiOutlineSortAscending } from "react-icons/ai";
import { Popup } from './DeleteModel';
import { SuccessPopup } from './SuccessModel';

export default function UserTable() {
    const [users, setUsers] = useState(initialUsers)
    const [searchQuery, setSearchQuery] = useState('')
    const [activeFilter, setActiveFilter] = useState('date')

    // Popup states
    const [deletePopup, setDeletePopup] = useState({ isOpen: false, userId: null })
    const [deactivatePopup, setDeactivatePopup] = useState({ isOpen: false, userId: null })
    const [successPopup, setSuccessPopup] = useState({ isOpen: false, message: '' })

    // Filter handlers
    const handleFilterClick = (filter) => {
        setActiveFilter(filter)
        setUsers(initialUsers)
    }

    // Search handler
    const handleSearch = (query) => {
        setSearchQuery(query)
        const filtered = initialUsers.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.accountCreated.includes(query) ||
            user.status.toLowerCase().includes(query.toLowerCase())
        )
        setUsers(filtered)
    }

    // Action handlers
    const handleDeactivateConfirm = () => {
        const userId = deactivatePopup.userId
        setUsers(users.map(user =>
            user.id === userId
                ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
                : user
        ))
        setDeactivatePopup({ isOpen: false, userId: null })
        setSuccessPopup({
            isOpen: true,
            message: `Account has been ${users.find(u => u.id === userId)?.status === 'Active' ? 'deactivated' : 'activated'}`
        })
    }

    const handleDeleteConfirm = () => {
        const userId = deletePopup.userId
        setUsers(users.filter(user => user.id !== userId))
        setDeletePopup({ isOpen: false, userId: null })
        setSuccessPopup({
            isOpen: true,
            message: 'Account has been successfully deleted'
        })
    }

    return (
        <div className="w-full mx-auto md:p-4 space-y-4">
            {/* Filter and Search Section */}
            <div className="flex flex-col sm:flex-row justify-end lg:justify-between items-center gap-4">
                <div className="hidden lg:flex gap-2">
                    {['date', 'month', 'year'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterClick(filter)}
                            className={`flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-full capitalize ${activeFilter === filter
                                ? 'bg-gray-200 text-gray-800'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <span>{filter}</span>
                            <RiArrowDownSLine />
                        </button>
                    ))}
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <AiOutlineSortAscending className="h-7 w-7 text-slate-600" />
                    <HiOutlineAdjustmentsHorizontal className="h-7 w-7 text-slate-600" />
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name, registration date, account status"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="pr-10 pl-4 py-2 w-full sm:w-96 border border-gray-200 focus:outline-none text-sm placeholder:text-sm bg-[#DFDFDF] rounded-full"
                        />
                        <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto pb-6">
                <table className="w-full border-separate border-spacing-y-4"> {/* Ensures spacing between rows */}
                    <thead>
                        <tr className="border-b text-sm md:text-base">
                            <th className="text-left md:py-4 px-4 font-medium text-nowrap">Name</th>
                            <th className="text-left md:py-4 px-4 font-medium text-nowrap">Account Created</th>
                            <th className="text-left md:py-4 px-4 font-medium text-nowrap">Rating</th>
                            <th className="text-left md:py-4 px-4 font-medium text-nowrap">Account Status</th>
                            <th className="text-right md:py-4 px-4 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user.id}
                                className={`w-full shadow-sm text-sm md:text-base ${index % 2 === 0 ? 'bg-[#CBD5E1]' : 'bg-[#D9D9D9]'} rounded-[5px]`}
                            >
                                <td className="py-3 px-4 rounded-l-[5px]"> {/* Left corner rounding */}
                                    <a href={`/users/${user.id}`} className="flex items-center gap-3">
                                        <img
                                            src={user.avatar}
                                            alt=""
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <span className='text-nowrap pr-3'>{user.name}</span>
                                    </a>
                                </td>
                                <td className="py-3 px-4">{user.accountCreated}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-1">
                                        {user.rating}
                                        <IoIosStar className="h-5 w-6 mb-0.5 text-slate-700" />
                                    </div>
                                </td>
                                <td className="py-3 px-4 rounded-r-[5px]">
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm ${user.status === 'Active'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="bg-white">
                                    <div className="ml-2 flex justify-end gap-2">
                                        <button
                                            onClick={() => setDeactivatePopup({ isOpen: true, userId: user.id })}
                                            className="w-[180px] md:w-full text-sm md:text-base px-4 py-2 h-[64px] rounded-md bg-gray-100 text-gray-600 border shadow-md"
                                        >
                                            {user.status === 'Active' ? 'Deactivate' : 'Activate'} Account
                                        </button>
                                        <button
                                            onClick={() => setDeletePopup({ isOpen: true, userId: user.id })}
                                            className="w-[180px] md:w-full text-sm md:text-base px-4 py-2 h-[64px] rounded-md bg-[#C16F6F] border shadow-sm"
                                        >
                                            Delete Account
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Confirmation Popups */}
            <Popup
                isOpen={deletePopup.isOpen}
                title="Delete Account"
                message={
                    <>
                        Once deleted, all data associated with this account will be permanently lost. An automated
                        email will be sent to the owner of this account regarding the deletion of their account.
                        <br />
                        <br />
                        Are you sure you want to delete this account?
                    </>
                }
                onConfirm={handleDeleteConfirm}
                onCancel={() => setDeletePopup({ isOpen: false, userId: null })}
            />

            <Popup
                isOpen={deactivatePopup.isOpen}
                title={`${users.find(u => u.id === deactivatePopup.userId)?.status === 'Active' ? 'Deactivate' : 'Activate'} Account`}
                message={`Are you sure you want to ${users.find(u => u.id === deactivatePopup.userId)?.status === 'Active' ? 'deactivate' : 'activate'} this account?`}
                onConfirm={handleDeactivateConfirm}
                onCancel={() => setDeactivatePopup({ isOpen: false, userId: null })}
            />

            {/* Success Popup */}
            <SuccessPopup
                isOpen={successPopup.isOpen}
                message={successPopup.message}
                onClose={() => setSuccessPopup({ isOpen: false, message: '' })}
            />
        </div>
    )
}


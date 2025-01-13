'use client'
import { useState, useEffect } from 'react';
import { IoIosSearch, IoIosStar } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { AiOutlineSortAscending } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../../redux/features/users/userSlice';
import moment from "moment";
import UserSkeleton from './UserSkeleton';
import SelectDate from './SelectDate';

export default function UserTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('date');
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);

    useEffect(() => {

        // console.log(page)
        dispatch(fetchUsers());
    }, []);
// }, [page]);


    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const totalPages = users?.body?.totalPages || 1;

    return (
        <div className="w-full mx-auto md:p-4 space-y-4">
            {/* Filter and Search Section */}
            <div className="flex flex-col sm:flex-row justify-end lg:justify-between items-center gap-4">
                <SelectDate activeFilter={activeFilter} handleFilterClick={setActiveFilter} />
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
                <table className="w-full border-separate border-spacing-y-4">
                    <thead>
                        <tr className="border-b text-sm md:text-base">
                            <th className="text-left md:py-4 px-4 font-medium">Name</th>
                            <th className="text-left md:py-4 px-4 font-medium">Account Created</th>
                            <th className="text-left md:py-4 px-4 font-medium">Rating</th>
                            <th className="text-left md:py-4 px-4 font-medium">Account Status</th>
                            <th className="text-right md:py-4 px-4 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {status === "succeeded" && users.body.users.map((user, index) => (
                            <tr
                                key={user.id}
                                className={`w-full shadow-sm text-sm md:text-base `}
                            >
                                <td className={`py-3 px-4 rounded-l-lg ${index % 2 === 0 ? 'bg-[#CBD5E1]' : 'bg-[#D9D9D9]'}`}>
                                    <a href={`/users/${user.id}`} className="flex items-center gap-3">
                                        <img
                                            src={user.profilePicture || "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"}
                                            alt=""
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <span>{user.firstName} {user.lastName}</span>
                                    </a>
                                </td>
                                <td className={`py-3 px-4 ${index % 2 === 0 ? 'bg-[#CBD5E1]' : 'bg-[#D9D9D9]'}`}>{moment(user.createdAt).format("MM/DD/YY")}</td>
                                <td className={`py-[25px] px-4 flex items-center gap-1 ${index % 2 === 0 ? 'bg-[#CBD5E1]' : 'bg-[#D9D9D9]'}`}>
                                    {user.rating || "4.5"}
                                    <IoIosStar className="h-5 w-6 text-slate-700" />
                                </td>
                                <td className={`py-3 px-4 rounded-r-lg ${index % 2 === 0 ? 'bg-[#CBD5E1]' : 'bg-[#D9D9D9]'}`}>
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm ${user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {user.isActive ? "Activated" : "Deactivated"}
                                    </span>
                                </td>
                                <td className="bg-white">
                                    <div className="ml-2 flex justify-end gap-2">
                                        <button
                                            // onClick={() => setDeactivatePopup({ isOpen: true, userId: user.id })}
                                            className="w-[180px] md:w-full text-sm md:text-base px-4 py-2 h-[64px] rounded-md bg-gray-100 text-gray-600 border shadow-md"
                                        >
                                            {user.isActive ? 'Deactivate' : 'Activate'} Account
                                        </button>
                                        <button
                                            // onClick={() => setDeletePopup({ isOpen: true, userId: user.id })}
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
                {status === "loading" && <UserSkeleton />}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-4">
                {/* Previous Button */}
                <button
                    onClick={() => setPage(page > 1 ? page - 1 : 1)}
                    disabled={page === 1}
                    className={`px-3 py-2 rounded-md ${page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-300'}`}
                >
                    &lt;
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    if (
                        pageNumber === 1 ||
                        pageNumber === totalPages ||
                        (pageNumber >= page - 1 && pageNumber <= page + 1)
                    ) {
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => setPage(pageNumber)}
                                className={`px-4 py-2 rounded-md border ${page === pageNumber
                                        ? 'bg-[#334155] text-white border-[#334155]'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-300 border-gray-200'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    }
                    if (pageNumber === page - 2 || pageNumber === page + 2) {
                        return (
                            <span key={pageNumber} className="px-2 py-1 text-gray-500">
                                ...
                            </span>
                        );
                    }
                    return null;
                })}

                {/* Next Button */}
                <button
                    onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
                    disabled={page === totalPages}
                    className={`px-3 py-2 rounded-md ${page === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-300'}`}
                >
                    &gt;
                </button>
            </div>

        </div>
    );
}

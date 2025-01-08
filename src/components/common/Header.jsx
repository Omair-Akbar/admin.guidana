import React, { useEffect, useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';

const userData = {
    name: "Jhon Doe",
    profilePicture: 'https://www.portotheme.com/wordpress/porto/classic-one-page/wp-content/uploads/sites/85/2016/06/team-1-640x640.jpg',
}

const Header = ({heading}) => {

    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const formatDate = (date) => {
            const day = date.getDate();
            const month = date.toLocaleString("en-US", { month: "short" });
            const year = date.getFullYear();
            const weekday = date.toLocaleString("en-US", { weekday: "long" });
            const hours = date.getHours();
            const minutes = date.getMinutes().toString().padStart(2, "0");
            const period = hours >= 12 ? "pm" : "am";
            const formattedHours = hours % 12 || 12;
            const daySuffix =
                day % 10 === 1 && day !== 11
                    ? "st"
                    : day % 10 === 2 && day !== 12
                        ? "nd"
                        : day % 10 === 3 && day !== 13
                            ? "rd"
                            : "th";

            return `${day}${daySuffix} ${month} ${year}, ${weekday} | ${formattedHours}:${minutes} ${period}`;
        };

        const updateDateTime = () => {
            const now = new Date();
            setDateTime(formatDate(now));
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 60000);

        return () => clearInterval(interval);
    }, []);

  return (
    <>
    <div className="flex justify-between items-center mb-4">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-nowrap flex flex-row gap-x-1.5">
                    <span>Hi {userData.name.split(' ')[0]}! </span><spna className="hidden md:block font-normal">What's on the agenda for today?</spna>
                </h1>
                <div className="relative group">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                        <div className="relative">
                            <img
                                src={userData.profilePicture}
                                alt={userData.name}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <span className="hidden md:block font-medium">{userData.name}</span>
                        <RiArrowDownSLine className="w-5 h-5 text-gray-500" />
                    </button>

                    {/* Add dropdown items here */}
                    <div className="hidden group-hover:block absolute right-0 pt-2">
                    <div className=' bg-white text-sm shadow-lg border border-gray-100 rounded-lg w-44'>
                    <p className='p-2 hover:bg-slate-100'>Setting</p>
                    <p className='p-2 hover:bg-slate-100'>Logout</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center mb-6'>
                <h2 className="text-base md:text-xl font-semibold">{heading}</h2>
                <span className="hidden md:block text-base text-gray-500">
                    {dateTime}
                </span>
            </div>
    </>
  )
}

export default Header

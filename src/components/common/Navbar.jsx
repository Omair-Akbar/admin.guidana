import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import {
    RiSettings4Line,
    RiCustomerService2Line,
} from 'react-icons/ri';
import { IoSettingsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import logo from "../../assets/logo.svg";

const navItems = [
    { icon: LuLayoutDashboard, path: '/dashboard', label: 'Dashboard' },
    { icon: MdManageAccounts, path: '/users', label: 'User Management' },
    // { icon: RiCustomerService2Line, path: '/support', label: 'Support' },
    // { icon: RiSettings4Line, path: '/settings', label: 'Settings' },
];

export default function Navbar() {
    const [activePath, setActivePath] = useState('/');
    const location = useLocation(); 

    useEffect(() => {
      setActivePath(location.pathname);
    }, [location.pathname]);

    return (
        <nav className="fixed left-0 top-0 h-screen w-14 md:w-24 flex flex-col bg-[#334155] text-white">
            {/* Logo */}
            <div className="p-4">
                <img src={logo} width={43} height={43} alt="Guidana Logo" className="w-[26px] md:h-[53px] h-[26px] md:w-[53px] mt-4 mx-auto" />
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col items-center gap-4 py-8">
                {navItems.map((item) => {
                    const isActive = activePath === item.path;
                    return (
                        <a
                            href={item.path}
                            key={item.path}
                            className={`p-2 md:p-3 rounded-full transition-colors duration-200 group relative
                                ${isActive
                                    ? 'bg-[#1E293B] text-white'
                                    : 'hover:bg-slate-50/10 hover:text-white bg-white text-[#1E293B]'
                                }`}
                        >
                            <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                            <span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-xs rounded-md hidden group-hover:block whitespace-nowrap">
                                {item.label}
                            </span>
                        </a>
                    );
                })}
            </div>

            {/* Bottom Items */}
            <div className="pb-4 md:p-4 flex flex-col gap-4 mx-auto">
                <a
                    href='/settings'
                    className={`p-1 md:p-3 rounded-full w-max transition-colors duration-200 group relative
                        ${activePath === '/settings'
                            ? 'bg-[#1E293B] text-white'
                            : 'hover:bg-slate-50/10 hover:text-white bg-white text-[#1E293B]'
                        }`}
                >
                    <IoSettingsOutline className="w-5 md:w-6 h-5 md:h-6" />
                    <span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-xs rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap">
                        Settings
                    </span>
                </a>
                <a
                    href='/support'
                    className={`p-1 md:p-3 rounded-full w-max transition-colors duration-200 group relative
                        ${activePath === '/support'
                            ? 'bg-[#1E293B] text-white'
                            : 'hover:bg-slate-50/10 hover:text-white bg-white text-[#1E293B]'
                        }`}
                >
                    <BiSupport className="w-5 md:w-6 h-5 md:h-6" />
                    <span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-xs rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap">
                        Support
                    </span>
                </a>
            </div>
        </nav>
    );
}

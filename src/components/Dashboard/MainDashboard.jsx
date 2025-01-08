import React from 'react'
import MetricCard from './MetricCard'
import { alerts, metrics } from '../../components/common/StaticData'
import AlertCard from './AlertCard'
import { IoMdMore } from "react-icons/io";
import Header from '../common/Header'

const MainDashboard = () => {

    return (
        <div className="ml-14 md:ml-24 p-3 md:p-6">
            <Header heading="Dashboard"/>
            <div className="mb-8">
                {/* Today's Activity */}
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-base md:text-xl font-semibold">Today's Activity</h2>
                    <span className="hodden lg:block text-sm text-gray-500">
                        (Auto-updated every 15 hours)
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {metrics.map((metric) => (
                        <MetricCard
                            key={metric.title}
                            title={metric.title}
                            value={metric.value}
                        />
                    ))}
                </div>
            </div>

            {/* Account Alerts */}
            <div>
                <h2 className="text-xl font-semibold mb-6">Account Alerts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Reported Accounts */}
                    <div className="border rounded-[5px] p-3 border-slate-300 h-max pb-0">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium">Reported Accounts</h3>
                            <span className="p-2 hover:bg-slate-200 rounded-full">
                                <IoMdMore className="text-xl" />
                            </span>
                        </div>
                        {alerts.reported.map((alert, index) => (
                            <AlertCard key={index} {...alert} />
                        ))}
                    </div>

                    {/* Guideline Violated */}
                    <div className="border rounded-[5px] p-3 border-slate-300 h-max pb-0">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium">Guideline Violated</h3>
                            <span className="p-2 hover:bg-slate-200 rounded-full">
                                <IoMdMore className="text-xl" />
                            </span>
                        </div>
                        {alerts.violated.map((alert, index) => (
                            <AlertCard key={index} {...alert} />
                        ))}
                    </div>

                    {/* Inactive Accounts */}
                    <div className="border rounded-[5px] p-3 border-slate-300 h-max pb-0">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium">Inactive Accounts</h3>
                            <span className="p-2 hover:bg-slate-200 rounded-full">
                                <IoMdMore className="text-xl" />
                            </span>
                        </div>
                        {alerts.inactive.map((alert, index) => (
                            <AlertCard key={index} {...alert} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard

import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const SelectDate = ({activeFilter, handleFilterClick}) => {
  return (
    <div className="hidden lg:flex gap-2">
    {['date', 'month', 'year'].map((filter) => (
        <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-full capitalize ${
                activeFilter === filter
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
            <span>{filter}</span>
            <RiArrowDownSLine />
        </button>
    ))}
</div>
  )
}

export default SelectDate

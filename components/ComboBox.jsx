import React, { useState } from 'react'
import { countries } from '@/cache/countries'

function ComboBox() {

    const [inputValue, setInputValue] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])
    const [openOptions, setOpenOptions] = useState(false)

    const options = countries

    const handleInputChange = (e) => {
        const value = e.target.value
        setInputValue(value)
        filterOptions(value)
        setOpenOptions(true)
    }

    const handleInputValue = (country) => {
        setInputValue(country)
        setOpenOptions(false)
    }

    const filterOptions = (value) => {
        const filtered = options.filter((option) =>
            option.country.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredOptions(filtered)
    }

    return (
        <div className="w-full">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="border p-2 w-full focus:outline-none"
                placeholder="Search by country"
            />
            {inputValue ? openOptions && (
                <div className="absolute z-10 w-1/5 max-h-56 overflow-y-scroll mt-1 bg-white border border-gray-300 shadow-lg">
                    {filteredOptions.map((option) => (
                        <div
                            key={option.country}
                            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleInputValue(option.country)}
                        >
                            <img
                                src={option.flag}
                                alt={option.country}
                                className="w-7 h-7 mr-4 rounded-full"
                            />
                            <span>{option.country}</span>
                        </div>
                    ))}
                </div>
            ): null}
        </div>
    )
}

export default ComboBox

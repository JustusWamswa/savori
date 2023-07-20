import React, { useState, useEffect } from 'react'
import { countries } from '@/cache/countries'

function ComboBox() {

    const [inputValue, setInputValue] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])

    const options = countries

    const handleInputChange = (e) => {
        const value = e.target.value
        setInputValue(value)
        filterOptions(value)
    }

    const filterOptions = (value) => {
        const filtered = options.filter((option) =>
            option.country.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredOptions(filtered)
    }

    return (
        <div className="w-1/5">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="border p-2 w-full"
                placeholder="Search by country"
            />
            {inputValue && (
                <div className="absolute z-10 w-1/5 mt-1 bg-white border border-gray-300 shadow-lg">
                    {filteredOptions.map((option) => (
                        <div
                            key={option.country}
                            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => setInputValue(option.country)}
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
            )}
        </div>
    )
}

export default ComboBox

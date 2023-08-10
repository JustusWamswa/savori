import Link from "next/link";
import ComboBox from "./ComboBox";
import { useState } from "react";
import { countries } from "@/cache/countries";
import { useRouter } from "next/router";

function ModalSearch(props) {

    const router = useRouter()

    const { isOpen, onClose } = props

    const [inputValue, setInputValue] = useState('')
    const [noInput, setNoInput] = useState(false)
    const [countryExists, setCountryExists] = useState(false)


    const handleSearch = () => {
        inputValue ?
            countries.map((country) => {
                (country.country).toLocaleLowerCase() == inputValue.toLocaleLowerCase() ? router.push(`/results/${inputValue.toLowerCase()}`)
                    : (setCountryExists(true),
                        setTimeout(() => {
                            setCountryExists(false)
                        }, 1000))
            })
            : (setNoInput(true),
                setTimeout(() => {
                    setNoInput(false)
                }, 1000))
    }



    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-60" onClick={onClose}></div>
            <div className="bg-tertiary p-8 z-10">
                <h2 className="mb-4">Search for the country where the restaurants you wish to explore are located:</h2>
                <div className="w-full">
                    <ComboBox inputValue={inputValue} setInputValue={setInputValue} />
                </div>

                {noInput ? <p className="text-red-700 pt-2 pl-2">Enter country *</p> : null}
                {countryExists ? <p className="text-red-700 pt-2 pl-2">Not found *</p> : null}

                <div className="flex justify-end">
                    <button
                        className="mt-4 mr-4 px-4 py-2 bg-primary text-tertiary"
                        onClick={handleSearch}
                    >
                        Search
                    </button>

                    <button
                        className="mt-4 px-4 py-2  text-primary border border-primary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ModalSearch
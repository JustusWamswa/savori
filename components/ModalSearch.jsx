import ComboBox from "./ComboBox";

function ModalSearch(props) {

    const { isOpen, onClose } = props

    const handleSearch = () => {
        console.log("search")
    }



    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-60" onClick={onClose}></div>
            <div className="bg-tertiary p-8 z-10">
                <h2 className="mb-4">Search for the country where the restaurants you wish to explore are located:</h2>
                <div className="w-full">
                    <ComboBox />
                </div>

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
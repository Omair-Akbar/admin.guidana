import { RxCross2 } from "react-icons/rx";

export function SuccessPopup({ message, isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-screen w-screen">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
               
                <p className="text-gray-600 mb-6">{message}</p>
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm rounded-md bg-[#2886FF] text-white"
                    >
                        Go back to dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}
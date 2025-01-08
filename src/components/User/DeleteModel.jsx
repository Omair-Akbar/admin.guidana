import { RxCross2 } from "react-icons/rx";

export function Popup({ title, message, onConfirm, onCancel, isOpen }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-screen w-screen">
            <div className="bg-white rounded-lg p-6 max-w-xl w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-center w-full">{title}</h3>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
                        <RxCross2 className="h-5 w-5" />
                    </button>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{message}</p>
                <div className="flex justify-center gap-3">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm rounded-md bg-[#C16F6F] text-white"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}
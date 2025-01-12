import { useLocation, useNavigate } from "react-router-dom";

export function SuccessPopup({ message, isOpen, onClose }) {
    const location = useLocation();
    const navigate = useNavigate(); 
    const isUsersRoute = location.pathname === "/users";

    if (!isOpen) return null;

    const handleNavigateToUsers = () => {
        if (!isUsersRoute) {
            navigate("/users");
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-[100vh] w-screen ${
                isUsersRoute ? "-top-4" : ""
            }`}
        >
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
                <p className="text-gray-600 mb-6">{message}</p>
                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            handleNavigateToUsers();
                            onClose(); // Optionally close the popup
                        }}
                        className="px-4 py-2 text-sm rounded-md bg-[#2886FF] text-white"
                    >
                        Go back to dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';
import {
  FaMars,
  FaGlobeAmericas,
  FaCross,
  FaUser,
  FaUsers,
  FaGem
} from 'react-icons/fa';
import { SuccessPopup } from './SuccessModel';
import { Popup } from './DeleteModel';

const ActionProfile = ({ user }) => {
  const [deletePopup, setDeletePopup] = useState({ isOpen: false, userId: null });
  const [deactivatePopup, setDeactivatePopup] = useState({ isOpen: false, userId: null });
  const [successPopup, setSuccessPopup] = useState({ isOpen: false, message: '' });

  const handleDeleteConfirm = () => {
    // Your logic to delete the account
    // setDeletePopup({ isOpen: false, userId: null });
    // setSuccessPopup({
    //   isOpen: true,
    //   message: 'Account has been successfully deleted'
    // });
  };

  const handleDeactivateConfirm = () => {
    // Your logic to deactivate the account
    // setDeactivatePopup({ isOpen: false, userId: null });
    // setSuccessPopup({
    //   isOpen: true,
    //   message: 'Account has been deactivated'
    // });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-gray-600">Loading user data...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full md:px-4 py-6">
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="absolute rounded-full border border-blue-400 p-1 mb-4 sm:mb-0 sm:mr-6">
              <img
                src={user.profilePicture || "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"}
                alt=""
                className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover"
              />
            </div>
            <div className="mt-52 sm:mt-0 sm:ml-60 w-full flex flex-col items-start pb-4">
              <div className="space-y-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-900">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="w-full flex flex-col gap-4 text-sm md:text-base pt-3">
                {/* First Row */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <FaMars className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium capitalize">
                      {user.gender.charAt(0).toUpperCase() + user.gender.slice(1).toLowerCase() || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">24 years</span>
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <FaGlobeAmericas className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">{user.country || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">Hispanic</span>
                  </div>
                </div>

                {/* Third Row */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <FaCross className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">{user.religion || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGem className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900 font-medium">{user.maritalStatus || "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <p className="text-gray-600 text-center text-sm sm:text-base max-w-xl mb-6">
            The above account has been reported as a spam account by multiple
            users. How do you want to proceed?
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 w-full max-w-xl">
            <button
              onClick={() => setDeletePopup({ isOpen: true, userId: user.id })}
              className="text-sm md:text-base flex-1 px-6 py-2.5 bg-[#2886FF] text-white font-medium rounded-lg hover:bg-[#2886FF]/90 transition-colors"
            >
              Delete Account
            </button>
            <button
              onClick={() => setDeactivatePopup({ isOpen: true, userId: user.id })}
              className="text-sm md:text-base flex-1 px-6 py-2.5 border border-[#2886FF] text-[#2886FF] font-medium rounded-lg hover:bg-[#2886FF]/5 transition-colors"
            >
              Deactivate Account
            </button>
          </div>
        </div>
      </div>

      {/* Delete Popup */}
      {/* <Popup
        isOpen={deletePopup.isOpen}
        title="Delete Account"
        message={
          <>
            Once deleted, all data associated with this account will be permanently lost. An automated
            email will be sent to the owner of this account regarding the deletion of their account.
            <br />
            <br />
            Are you sure you want to delete this account?
          </>
        }
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeletePopup({ isOpen: false, userId: null })}
      /> */}

      {/* Deactivate Popup */}
      {/* <Popup
        isOpen={deactivatePopup.isOpen}
        title={`${user.status === 'Active' ? 'Deactivate' : 'Activate'} Account`}
        message={`Are you sure you want to ${user.status === 'Active' ? 'deactivate' : 'activate'} this account?`}
        onConfirm={handleDeactivateConfirm}
        onCancel={() => setDeactivatePopup({ isOpen: false, userId: null })}
      /> */}

      {/* Success Popup */}
      {/* <SuccessPopup
        isOpen={successPopup.isOpen}
        message={successPopup.message}
        onClose={() => setSuccessPopup({ isOpen: false, message: '' })}
      /> */}
    </>
  );
};

export default ActionProfile;

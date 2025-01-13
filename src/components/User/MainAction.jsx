import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import ActionProfile from "./ActionProfile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/features/users/userSlice";

const MainAction = () => {
  const dispatch = useDispatch();
  const { userId } = useParams(); // `userId` from the route params
  const { users, status, error } = useSelector((state) => state.users);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchAndSetUser = async () => {
      try {
        // Dispatch the fetchUsers action
        const actionResult = await dispatch(fetchUsers());
        
        // Access the users from the action payload
        const fetchedUsers = actionResult.payload?.body?.users;

        if (fetchedUsers) {
          const foundUser = fetchedUsers.find(
            (u) => u.id.toString() === userId
          );
          setUser(foundUser);
        }
      } catch (err) {
        console.error("Error fetching users or finding the user:", err);
      }
    };

    fetchAndSetUser();
  }, [dispatch, userId]); // Depend on dispatch and userId

  return (
    <div className="ml-14 md:ml-24 p-3 md:p-6">
      <Header heading="Manage Accounts" />
      {user ? (
        <ActionProfile user={user} />
      ) : status === "loading" && (
        <p className="mt-4 text-blue-600">Loading...</p>
      )}
    </div>
  );
};

export default MainAction;

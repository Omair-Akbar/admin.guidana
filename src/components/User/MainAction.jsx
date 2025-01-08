import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import { users } from '../common/StaticData';
import ActionProfile from './ActionProfile';

const MainAction = ({ id }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const foundUser = users.find((user) => user.id === id); // Search user by id
        setUser(foundUser);
    }, [id]);

    return (
        <div className="ml-14 md:ml-24 p-3 md:p-6">
            <Header heading="Manage Accounts" />
            {user ? (
                <ActionProfile user={user} />
            ) : (
                <p className="mt-4 text-red-600">User not found!</p>
            )}
        </div>
    )
}

export default MainAction

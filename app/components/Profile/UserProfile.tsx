import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import SessionWrapper from '../SessionProvider/SessionProvider';
import Avatar from '../UserProfilePicture';
import Link from 'next/link';

const UserProfile = () => {
    const { data: session, status, ...res } = useSession();
    
    const showUserInfo = () => {
        if (session?.user?.fullname) {
            return session.user.fullname;
        }
        return session?.user?.username;
    }

    return (
        <Link href='/settings/profile'>
            <div className="flex justify-center items-center ml-2 gap-2">
                <Avatar />
                <h3 className="hidden md:block font-semibold">{showUserInfo()}</h3>
            </div>
        </Link>
    )
}

export default UserProfile
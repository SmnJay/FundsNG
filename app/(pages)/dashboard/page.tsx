import DashboardWrapper from '@/app/components/Dashboard/DashboardWrapper';
import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options';

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  const isProfileSetUp = (): boolean => {
    const fullname = session?.user?.fullname?.trim();
    const email = session?.user?.username; //this should actually be .user.email but Godstar never run am yet.

    if (!fullname || fullname.length === 0 || !email) {
      return false;
    }
    return true;
  };

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <DashboardWrapper isProfileSetUp={isProfileSetUp()} />
    </Suspense>
  )
};

export default DashboardPage;
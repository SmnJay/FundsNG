import DashboardWrapper from '@/app/components/Dashboard/DashboardWrapper';
import { getServerSession } from 'next-auth';
import React, { use } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options';

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  const isProfileSetUp = (): boolean => {
    if (!session?.user?.fullname || !session?.user?.email) {
      return false
    }
    return true
  }

  return (
    <DashboardWrapper isProfileSetUp={isProfileSetUp()} />
  )
};

export default DashboardPage;
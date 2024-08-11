import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options';
import CompleteProfile from '@/app/components/Forms/CompleteProfile'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.emailConfirmed) {
    redirect('/verify-otp')
  }

  return (
    <CompleteProfile userId={session?.user?.userId as string} />
  )
}

export default page
import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options';
import CompleteProfile from '@/app/components/Forms/CompleteProfile'
import { getServerSession } from 'next-auth';
import React from 'react'
import toast from 'react-hot-toast';

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.emailConfirmed) {
    toast.error('Your Email has not been verified, please sign in with the same account and verify the email using the otp.')
    // redirect('/signin')
  }

  return (
    <CompleteProfile userId={session?.user?.userId as string} />
  )
}

export default page
import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options';
import VerifyEmailForm from '@/app/components/Forms/VerifyEmailForm';
// import VerifyOtpForm from '@/app/components/Forms/VerifyOtp';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'


const page = async () => {
  // const session = await getServerSession(authOptions);

  // if (session?.user?.emailConfirmed) {
  //   redirect('/dashboard')
  // }

  return (
    <>
      <VerifyEmailForm />
      {/* <VerifyOtpForm email={session?.user?.username as string} userId={session?.user?.userId as string} /> */}
    </>
  )
}

export default page
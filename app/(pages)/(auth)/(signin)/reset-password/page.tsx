import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options'
import ResetPasswordForm from '@/app/components/Forms/ResetPasswordForm';
import { getServerSession } from 'next-auth'
import React from 'react'

const ResetPassword = async () => {
  const session = await getServerSession(authOptions);

  console.log(session, 'aaa')

  return (
    <ResetPasswordForm email={session?.user?.username as string} />
  )
}

export default ResetPassword
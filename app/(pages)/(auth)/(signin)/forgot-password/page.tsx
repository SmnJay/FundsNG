import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options'
import ForgotPasswordForm from '@/app/components/Forms/ForgotPasswordForm'
import { getServerSession } from 'next-auth'
import React from 'react'

const ForgotPassword = async () => {
  const session = await getServerSession(authOptions);

  return (
    <ForgotPasswordForm />
  )
}

export default ForgotPassword
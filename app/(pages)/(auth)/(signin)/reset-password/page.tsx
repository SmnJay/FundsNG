import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options'
import ResetPasswordForm from '@/app/components/Forms/ResetPasswordForm';
import { getServerSession } from 'next-auth'
import React from 'react'

const ResetPassword = async () => {

  return (
    <ResetPasswordForm />
  )
}

export default ResetPassword
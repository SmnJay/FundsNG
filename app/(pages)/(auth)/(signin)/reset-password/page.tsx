import ResetPasswordForm from '@/app/components/Forms/ResetPasswordForm';
import React, { Suspense } from 'react'

const ResetPassword = async () => {

  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  )
}

export default ResetPassword
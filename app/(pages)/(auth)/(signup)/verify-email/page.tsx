import VerifyEmailForm from '@/app/components/Forms/VerifyEmailForm';
import React, { Suspense } from 'react'


const page = async () => {

  return (
    <Suspense fallback='...loading'>
      <VerifyEmailForm />
    </Suspense>
  )
}

export default page
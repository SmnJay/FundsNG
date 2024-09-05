import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options';
import VerifyEmailForm from '@/app/components/Forms/VerifyEmailForm';
import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react'


const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Suspense fallback='...loading'>
      <VerifyEmailForm />
    </Suspense>
  )
}

export default page
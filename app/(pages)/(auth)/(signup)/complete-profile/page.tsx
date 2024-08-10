'use client';

import CompleteProfile from '@/app/components/Forms/CompleteProfile'
import SessionWrapper from '@/app/components/SessionProvider/SessionProvider'
import React from 'react'

const page = () => {
  return (
    <SessionWrapper>
      <CompleteProfile />
    </SessionWrapper>
  )
}

export default page
import Breadcrumb from '@/app/components/Breadcrumb';
import MultiStepForm from '@/app/components/Forms/MultiStepForm';
import React from 'react'

const Create = () => {
  const breadcrumbItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Campaigns', path: '/dashboard/campaigns' },
    { label: 'Create' }  // Current page, no link
  ];
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <MultiStepForm />
    </div>
  )
}

export default Create
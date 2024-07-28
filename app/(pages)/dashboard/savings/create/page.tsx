import Breadcrumb from '@/app/components/Breadcrumb'
import CreateSavings from '@/app/components/Forms/CreateSavings'
import React from 'react'

const CreateTargetSavings = () => {
    const breadcrumbs = [
        {label: 'Dashboard', path: '/dashboard'},
        {label: 'Savings', path: '/dashboard/savings'},
        {label: 'Create', path: ''},
    ]
  return (
    <>
    <Breadcrumb items={breadcrumbs} />
    <CreateSavings />
    </>
  )
}

export default CreateTargetSavings
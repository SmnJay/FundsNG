import Breadcrumb from '@/app/components/Breadcrumb'
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
    </>
  )
}

export default CreateTargetSavings
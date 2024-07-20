import Breadcrumb from '@/app/components/Breadcrumb';
import CampaignWrapper from '@/app/components/Campaigns/CampaignWrapper'
import React from 'react'

const Campaings = () => {
  const breadcrumbItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Campaigns' }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <CampaignWrapper />
    </>
  )
}

export default Campaings
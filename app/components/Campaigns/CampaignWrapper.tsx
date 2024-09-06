'use client';

import React from 'react'
import { getCampaignApiService } from '@/app/utils/services/campaign/campaignApiService';
import { useQuery } from '@tanstack/react-query';
import EmptyCampaignView from './EmptyCampaignView';
import CampaignDashboard from './CampaignDashboard';
import CampaignLoader from './CampaignLoader';

const CampaignWrapper = () => {
    const campaignQuery = useQuery({
        queryKey: ['campaign'],
        queryFn: getCampaignApiService,
    });

    return (
        <>
            {
                campaignQuery?.isLoading ?
                    <>
                        {
                            Array.from({ length: 2 }, (_, index) => (
                                <CampaignLoader key={index} />
                            ))
                        }

                    </>
                    :
                    campaignQuery?.data?.length < 1 ? <EmptyCampaignView /> : <CampaignDashboard data={campaignQuery?.data} />
            }
        </>
    )
}

export default CampaignWrapper
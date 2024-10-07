'use client';

import React, { useState } from 'react';
import { getCampaignApiService } from '@/app/utils/services/campaign/campaignApiService';
import { useQuery } from '@tanstack/react-query';
import EmptyCampaignView from './EmptyCampaignView';
import CampaignDashboard from './CampaignDashboard';
import CampaignLoader from './CampaignLoader';
import { ICampaign } from '@/app/utils/models/Model';
import { useSearchParams } from 'next/navigation';

const CampaignWrapper = () => {
    const searchParams = useSearchParams();
    const initialPage = Number(searchParams.get("page")) || 1;

    const [currentPage, setCurrentPage] = useState(initialPage); // Store the current page in state

    // Fetch campaigns based on the current page
    const campaignQuery = useQuery<{ data: ICampaign[], metaData: { totalPages: number, totalCount: number } }>({
        queryKey: ['campaign', currentPage],
        queryFn: () => getCampaignApiService(currentPage),
    });

    return (
        <>
            {campaignQuery?.isLoading ? (
                <>
                    {Array.from({ length: 8 }, (_, index) => (
                        <CampaignLoader key={index} />
                    ))}
                </>
            ) : (
                campaignQuery?.data?.data && campaignQuery.data.data.length < 1 ? (
                    <EmptyCampaignView />
                ) : (
                    <CampaignDashboard
                        total={campaignQuery?.data?.metaData?.totalPages as number}
                        number={campaignQuery?.data?.metaData?.totalCount as number}
                        data={campaignQuery?.data?.data ?? []}
                        currentPage={currentPage} // Pass current page to CampaignDashboard
                        setCurrentPage={setCurrentPage} // Pass setCurrentPage to CampaignDashboard
                    />
                )
            )}
        </>
    );
};

export default CampaignWrapper;

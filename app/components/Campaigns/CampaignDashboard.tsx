import React from 'react';
import CampaignCard from './CampaignCard';
import { BiPlus } from 'react-icons/bi';
import { IoFilterOutline } from 'react-icons/io5';
import Link from 'next/link';
import { ICampaign } from '@/app/utils/models/Model';
import Pagination from '../Pagination/Pagination';
import Image from 'next/image';
import ProgressBar from '../ProgressBar';
import moneyFormatter from '@/app/utils/helper/moneyFormatter';
import calculateDaysLeft from '@/app/utils/helper/deadlineCalculator';
import CampaignCad from './CampaignCad';

type CampaignDashboardProps = {
    data: ICampaign[];
    number: number;
    total: number;
    currentPage: number; // Add currentPage as a prop
    setCurrentPage: (page: number) => void; // Function to update the current page
};

const CampaignDashboard: React.FC<CampaignDashboardProps> = ({ data, number, total, currentPage, setCurrentPage }) => {
    return (
        <div className="space-y-4 mt-6">
            <div className="bg-white text-[#5f655e] flex items-center justify-between text-sm font-semibold rounded-lg p-3">
                <span>Your Campaigns ({number})</span>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 rounded-lg md:leading-4 border-2 px-2 py-2 font-medium">
                        <IoFilterOutline />
                        <span className="max-md:hidden">Filter</span>
                    </button>
                    <Link href={'/dashboard/campaigns/create'} className="flex items-center gap-1 rounded-lg md:leading-4 border-2 border-leafGreen-20 text-white bg-leafGreen-20 px-2 py-2 font-medium">
                        <BiPlus color="white" />
                        <span className="max-md:hidden">Create Campaign</span>
                    </Link>
                </div>
            </div>

            {
                data?.map((campaign) => (
                    <CampaignCad
                        key={campaign.id}
                        amount={campaign.targetAmount}
                        description={campaign.description}
                        status={campaign.status}
                        link={`/dashboard/campaigns/${campaign.id}`}
                        title={campaign.name}
                        dateCreated={campaign.endDate.slice(0, 10)}
                        imageSrc="/images/underbridge.png"
                    />
                ))
            }

            {/* Pass currentPage and setCurrentPage to Pagination */}
            <Pagination
                totalPages={total} // Total number of pages
                currentPage={currentPage} // Current active page
                setCurrentPage={setCurrentPage} // Function to update the page
            />
        </div>
    );
};

export default CampaignDashboard;

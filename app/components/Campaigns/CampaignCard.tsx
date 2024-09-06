import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Status from '../Status/Status'
import { dateFormatter } from '@/app/utils/helper/dateFormatter'

type CampaignCardProps = {
    link: string
    imageSrc: string
    dateCreated: string
    title: string
    status: string
}

const CampaignCard: React.FC<CampaignCardProps> = ({ status, link, imageSrc, dateCreated, title }) => {
    return (
        <Link href={link} className="hover:shadow ease-linear duration-200">
            <div className="bg-white p-4 space-y-2 rounded-md">
                <Image src={imageSrc} width={300} height={120} style={{ width: '100%' }} alt='' />
                <h6 className="text-[#3f4343] font-semibold">{title}</h6>
                <div className="flex items-center gap-2">
                    <span className="text-[#888f87] text-xs">Created {dateFormatter(dateCreated)}</span>
                    <Status status={status} />
                </div>
            </div>
        </Link>
    )
}

export default CampaignCard;
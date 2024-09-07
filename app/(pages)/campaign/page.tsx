import Button, { ButtonLink } from '@/app/components/Button/Button'
import PreviewCampaign from '@/app/components/Campaigns/PreviewCampaign'
import ProgressBar from '@/app/components/ProgressBar'
import Image from 'next/image'
import React, { Suspense } from 'react'
import { FaHourglassHalf, FaUserCircle } from 'react-icons/fa'
import { IoIosGift, IoMdShareAlt } from 'react-icons/io'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { RiCalendarTodoFill } from 'react-icons/ri'

const page = () => {
    return (
        <Suspense>
            <PreviewCampaign />
        </Suspense>

    )
}

export default page
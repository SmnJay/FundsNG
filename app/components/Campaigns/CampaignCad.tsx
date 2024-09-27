import Image from 'next/image'
import React from 'react'
import ProgressBar from '../ProgressBar'
import moneyFormatter from '@/app/utils/helper/moneyFormatter'
import calculateDaysLeft from '@/app/utils/helper/deadlineCalculator'
import Link from 'next/link'

type Props = {
    link: string
    imageSrc: string
    dateCreated: string
    title: string
    status: string
    description: string
    amount: number | string
    progress: number
    daysLeft: number
    numberOfDonors: number
    amountRaised: number
    category: string
}

export const campaignStatus = (status: string) => {
    switch (status.toLowerCase()) {
        case 'started':
            return <span className="inline-block h-[8px] w-[8px] bg-leafGreen-20"></span>
        case 'draft':
            return <span className="inline-block h-[8px] w-[8px] bg-primary"></span>
        case 'stopped':
            return <span className="inline-block h-[8px] w-[8px] bg-gray-500"></span>
        default:
            return status;
    }
}

export const campaignCategory = (category: string) => {
    switch (category.toLocaleLowerCase()) {
        case 'charity':
            return (<span className='flex items-center justify-center rounded-full w-7 h-7 bg-[#FDD6E2] p-1'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5331_10418)">
                        <path d="M6.875 5.72937C6.875 5.72937 3.75 3.51875 3.75 1.71875C3.73029 1.28389 3.88361 0.858919 4.17643 0.536816C4.46926 0.214713 4.87773 0.021699 5.3125 0C5.74727 0.021699 6.15574 0.214713 6.44857 0.536816C6.74139 0.858919 6.89471 1.28389 6.875 1.71875C6.85529 1.28389 7.00861 0.858919 7.30143 0.536816C7.59426 0.214713 8.00273 0.021699 8.4375 0C8.87227 0.021699 9.28074 0.214713 9.57357 0.536816C9.86639 0.858919 10.0197 1.28389 10 1.71875C10 3.51875 6.875 5.72937 6.875 5.72937ZM14.4675 5.42562C14.1497 5.1356 13.73 4.98314 13.3001 5.00152C12.8702 5.01991 12.465 5.20765 12.1731 5.52375L9.95938 7.85937C9.98336 7.99102 9.99694 8.12435 10 8.25813C9.99734 8.89122 9.76779 9.50238 9.35301 9.98069C8.93823 10.459 8.36572 10.7727 7.73938 10.865L5.08875 11.2437L4.91125 10.0063L7.5625 9.625C7.90565 9.57207 8.21634 9.39201 8.43287 9.12059C8.6494 8.84917 8.75592 8.50623 8.73129 8.1599C8.70665 7.81356 8.55265 7.48916 8.29989 7.25112C8.04712 7.01309 7.71406 6.87882 7.36687 6.875H1.875C1.37772 6.875 0.900805 7.07254 0.549175 7.42417C0.197544 7.77581 0 8.25272 0 8.75L0 13.125C0 13.6223 0.197544 14.0992 0.549175 14.4508C0.900805 14.8025 1.37772 15 1.875 15H7.915L14.5862 7.71563C14.8708 7.39465 15.0178 6.9747 14.9956 6.54632C14.9734 6.11794 14.7837 5.71545 14.4675 5.42562Z" fill="#F7A145" />
                    </g>
                    <defs>
                        <clipPath id="clip0_5331_10418">
                            <rect width="15" height="15" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>)

        case 'emergency':
            return (<span className='flex items-center justify-center rounded-full w-7 h-7 bg-[#F4EEFB] p-1'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5331_10421)">
                        <path d="M14.2256 6.87582H10V2.50081H10.6562C11.1398 2.50125 11.6128 2.64164 12.0183 2.90504C12.4238 3.16845 12.7443 3.54359 12.9412 3.98519L14.2256 6.87582ZM15 9.41457V11.8758H0V4.37581C0 3.87853 0.197544 3.40162 0.549175 3.04999C0.900805 2.69836 1.37772 2.50081 1.875 2.50081H6.25L6.72312 0.607065C6.76632 0.433704 6.86626 0.279771 7.00703 0.169765C7.14781 0.0597584 7.32134 0 7.5 0C7.67866 0 7.85219 0.0597584 7.99297 0.169765C8.13374 0.279771 8.23368 0.433704 8.27688 0.607065L8.75 2.50081V8.12582H14.7669C14.9202 8.53823 14.9991 8.97458 15 9.41457ZM6.25 6.87582H5V5.62582H3.75V6.87582H2.5V8.12582H3.75V9.37582H5V8.12582H6.25V6.87582ZM1.91125 13.1258C1.88835 13.2284 1.87621 13.3332 1.875 13.4383C1.875 13.8527 2.03962 14.2501 2.33265 14.5432C2.62567 14.8362 3.0231 15.0008 3.4375 15.0008C3.8519 15.0008 4.24933 14.8362 4.54235 14.5432C4.83538 14.2501 5 13.8527 5 13.4383C4.99879 13.3332 4.98665 13.2284 4.96375 13.1258H1.91125ZM10.6613 13.1258C10.6384 13.2284 10.6262 13.3332 10.625 13.4383C10.625 13.8527 10.7896 14.2501 11.0826 14.5432C11.3757 14.8362 11.7731 15.0008 12.1875 15.0008C12.6019 15.0008 12.9993 14.8362 13.2924 14.5432C13.5854 14.2501 13.75 13.8527 13.75 13.4383C13.7488 13.3332 13.7366 13.2284 13.7137 13.1258H10.6613Z" fill="#9E55D7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_5331_10421">
                            <rect width="15" height="15" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>)

        case 'savings':
        case 'medical':
            return (<span className='flex items-center justify-center rounded-full w-7 h-7 bg-[#DFF7F7] p-1'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.875 2.72727H10V2.04545C10 1.50297 9.80246 0.982697 9.45083 0.5991C9.0992 0.215503 8.62228 0 8.125 0H6.875C6.37772 0 5.90081 0.215503 5.54917 0.5991C5.19754 0.982697 5 1.50297 5 2.04545V2.72727H3.125C2.2965 2.72836 1.50222 3.08787 0.916387 3.72697C0.330551 4.36606 0.000992411 5.23255 0 6.13636L0 11.5909C0.000992411 12.4947 0.330551 13.3612 0.916387 14.0003C1.50222 14.6394 2.2965 14.9989 3.125 15H11.875C12.7035 14.9989 13.4978 14.6394 14.0836 14.0003C14.6694 13.3612 14.999 12.4947 15 11.5909V6.13636C14.999 5.23255 14.6694 4.36606 14.0836 3.72697C13.4978 3.08787 12.7035 2.72836 11.875 2.72727ZM6.25 2.04545C6.25 1.86463 6.31585 1.6912 6.43306 1.56334C6.55027 1.43547 6.70924 1.36364 6.875 1.36364H8.125C8.29076 1.36364 8.44973 1.43547 8.56694 1.56334C8.68415 1.6912 8.75 1.86463 8.75 2.04545V2.72727H6.25V2.04545ZM9.375 9.54546H8.125V10.9091C8.125 11.0899 8.05915 11.2633 7.94194 11.3912C7.82473 11.5191 7.66576 11.5909 7.5 11.5909C7.33424 11.5909 7.17527 11.5191 7.05806 11.3912C6.94085 11.2633 6.875 11.0899 6.875 10.9091V9.54546H5.625C5.45924 9.54546 5.30027 9.47362 5.18306 9.34576C5.06585 9.21789 5 9.04447 5 8.86364C5 8.68281 5.06585 8.50938 5.18306 8.38152C5.30027 8.25365 5.45924 8.18182 5.625 8.18182H6.875V6.81818C6.875 6.63735 6.94085 6.46393 7.05806 6.33606C7.17527 6.2082 7.33424 6.13636 7.5 6.13636C7.66576 6.13636 7.82473 6.2082 7.94194 6.33606C8.05915 6.46393 8.125 6.63735 8.125 6.81818V8.18182H9.375C9.54076 8.18182 9.69973 8.25365 9.81694 8.38152C9.93415 8.50938 10 8.68281 10 8.86364C10 9.04447 9.93415 9.21789 9.81694 9.34576C9.69973 9.47362 9.54076 9.54546 9.375 9.54546Z" fill="#5D94D6" />
                </svg></span>)

        default:
            return <span className='flex items-center justify-center rounded-full w-7 h-7 bg-[#DFF7F7] p-1'>?</span>
    }
}
const CampaignCad = (props: Props) => {

    return (
        <Link href={props.link} className='bg-white rounded-r-lg flex flex-col md:flex-row items-center gap-12 pr-6 relative'>
            <div className="w-[326px] h-[213px] spb-[153.05%] relative">
                <Image
                    className='h-full'
                    src={'/images/campaign-page-preview.png'}
                    width={326}
                    height={213}
                    alt=''
                />
                <div className="absolute right-4 bottom-4 flex items-center gap-2">
                    <div className="">{campaignCategory(props.category)}
                    </div>
                    <div className=" bg-[#f4ffe3eb] border border-[#FC9D51] rounded-lg py-1 px-3 font-medium  text-[11px] flex items-center gap-1">{campaignStatus(props.status)} {props.status}</div>
                </div>
            </div>
            <div className="font-inter w-[60%] py-6">
                <h6 className="font-semibold md:leading-loose text-base text-[#3f4343] mb-1">{props.title}</h6>
                <p className="text-[#899192] text-sm mb-3">{props.description}</p>
                <ProgressBar value={props.progress} />
                <div className="grid grid-cols-4 items-center gap-2 mt-4">
                    <div className="">
                        <p className="font-semibold text-xl">&#8358;{moneyFormatter(props.amount as string | number)}</p>
                        <p className="leading-loose font-light text-[#8B8B8B]">Target</p>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xl">{props.amountRaised}</p>
                        <p className="leading-loose font-light text-[#8B8B8B]">Raised so far</p>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xl">{props.numberOfDonors}</p>
                        <p className="leading-loose font-light text-[#8B8B8B]">Donors</p>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xl">{props.daysLeft}</p>
                        <p className="leading-loose font-light text-[#8B8B8B]">Days Left</p>
                    </div>
                </div>
            </div>
            <span className="absolute top-4 right-5 inline-block bg-red-400 rounded-full"></span>
        </Link>
    )
}

export default CampaignCad
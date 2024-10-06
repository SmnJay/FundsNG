import moneyFormatter from '@/app/utils/helper/moneyFormatter';
import React, { FC } from 'react';
import { FaCircleUser } from "react-icons/fa6";

type Props = {
  name: string
  amount: number
  picture: string
}

const CampaginDonationUpdate: FC<Props> = ({ name, amount, picture }) => {
  return (
    <div className='flex items-start justify-between gap-2'>
      <div className="flex items-center gap-4">
        <div className="">{<FaCircleUser size={45} color="#ECEEEE" />}</div>
        <div className="">
          <ul className="">
            <li className="text-[#5F655E] font-medium text-base">{name === '' ? 'Anonymous' : name} just made a donation 🎉</li>
            <li className="font-light text-sm leading-loose text-[#ACB2B3]">10:34 | 2 April, 2024</li>
          </ul>
        </div>
      </div>
      <div className="font-semibold text-lg">&#8358;{moneyFormatter(amount)}</div>
    </div>
  )
}

export default CampaginDonationUpdate
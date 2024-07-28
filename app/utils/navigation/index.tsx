import { ReactNode } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { BsFileEarmarkText } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";
import { TbMessage2, TbMoneybag } from "react-icons/tb";

export type NavData = {
    id: number,
    name: string,
    link: string,
    icon: ReactNode
};


const nav_data: NavData[] = [
    {
        id: 1,
        name: 'dashboard',
        link: '/dashboard',
        icon: <BiHomeSmile />
    }, {
        id: 2,
        name: 'campaigns',
        link: '/dashboard/campaigns',
        icon: <TbMessage2 />
    }, {
        id: 3,
        name: 'savings',
        link: '/dashboard/savings',
        icon: <TbMoneybag />
    }, {
        id: 4,
        name: 'wallet',
        link: '/dashboard/wallet',
        icon: <BsFileEarmarkText />
    }, {
        id: 5,
        name: 'settings',
        link: '/dashboard/settings/profile',
        icon: <HiOutlineCog6Tooth />
    }
];

export { nav_data };
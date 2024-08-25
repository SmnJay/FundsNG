import { ButtonLink } from '@/app/components/Button/Button'
import Logo, { WhiteLogo } from '@/app/components/Logo/Logo'
import Avatar from '@/app/components/UserProfilePicture'
import React from 'react'
import { BsBellFill } from 'react-icons/bs'
import { FaPiggyBank, FaWallet } from 'react-icons/fa'
import { RiMegaphoneFill } from 'react-icons/ri'
import { TbLayoutDashboardFilled } from 'react-icons/tb'

const CampaignLayout = ({ children }: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className='bg-[#F6F6F6]'>
            <header className=" bg-white">
                <section className="app-width flex justify-between items-center h-20">
                    <div className="">
                        <Logo />
                    </div>
                    <nav className="hidden md:block">
                        <ul className='flex items-center gap-8 text-sm'>
                            <li className="flex items-center gap-2 cursor-pointer"><TbLayoutDashboardFilled className='text-[#5F655E]' /><span className=" font-light">Home</span> </li>
                            <li className="flex items-center gap-2 cursor-pointer"><RiMegaphoneFill className='text-leafGreen-40' /><span className="text-leafGreen-30 font-light">Campaign</span> </li>
                            <li className="flex items-center gap-2 cursor-pointer"><FaPiggyBank className='text-[#5F655E]' /><span className=" font-light">Target Savings</span> </li>
                            <li className="flex items-center gap-2 cursor-pointer"><FaWallet /><span className=" font-light">Wallet</span> </li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-3">
                        <BsBellFill size={34} className='hidden md:block hover:bg-appGrey text-primary-10 p-2 rounded-lg ease-linear duration-200' />
                        <Avatar />
                    </div>
                </section>
            </header>
            {children}
            <footer className="bg-[#1D211C] text-white min-h-20 py-12">
                <section className="app-width grid gap-10 md:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    <div className="md:col-span-3 lg:col-span-2">
                        <div className="">
                            <WhiteLogo />
                        </div>
                        <p className="text-sm font-extralight pt-4 pb-6">Harness the collective strength of our community to drive positive change where it matters most.</p>
                        <ButtonLink cls='whitespace-nowrap w-1/2 md:w-1/3 lg:w-1/2' href='/' name="Create an Account" ariaLabel="Create an Account" color="white" />
                    </div>
                    <div className="">
                        <h6 className="font-extralight text-sm mb-4 lg:mb-8">Quick Links</h6>
                        <ul className="text-sm space-y-3 lg:space-y-6">
                            <li className="">Discover Campaigns</li>
                            <li className="">Browse Categories</li>
                            <li className="">About Us</li>
                            <li className="">FAQs</li>
                        </ul>
                    </div>
                    <div className="">
                        <h6 className="font-extralight text-sm mb-4 lg:mb-8">Other Useful Links</h6>
                        <ul className="text-sm space-y-3 lg:space-y-6">
                            <li className="">Blog</li>
                            <li className="">Privacy Policy</li>
                            <li className="">Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className="">
                        <h6 className="font-extralight text-sm mb-4 lg:mb-8">Socials</h6>
                        <ul className="text-sm space-y-3 lg:space-y-6">
                            <li className="">X (Formerly Twitter)</li>
                            <li className="">Twitter</li>
                            <li className="">Instagram</li>
                            <li className="">Facebook</li>
                        </ul>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default CampaignLayout
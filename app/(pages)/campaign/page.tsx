import { ButtonLink } from '@/app/components/Button/Button'
import Logo, { WhiteLogo } from '@/app/components/Logo/Logo'
import UserProfile from '@/app/components/Profile/UserProfile'
import Avatar from '@/app/components/UserProfilePicture'
import Image from 'next/image'
import React from 'react'
import { BsBellFill } from 'react-icons/bs'

const page = () => {
    return (
        <div className='bg-[#F6F6F6]'>
            <header className=" bg-white">
                <section className="app-width flex justify-between items-center h-20">
                    <div className="">
                        <Logo />
                    </div>
                    <nav className="hidden md:block">
                        <ul className='flex items-center gap-8 text-sm'>
                            <li className=""><span className="text-[#5F655E] font-light">Home</span> </li>
                            <li className=""><span className="text-leafGreen-30 font-light">Campaign</span> </li>
                            <li className=""><span className="text-[#5F655E] font-light">Target Savings</span> </li>
                            <li className=""><span className="text-[#5F655E] font-light">Wallet</span> </li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-3">
                        <BsBellFill size={34} className='hidden md:block hover:bg-appGrey text-primary-10 p-2 rounded-lg ease-linear duration-200' />
                        <Avatar />
                    </div>
                </section>
            </header>

            <main className='app-width py-6'>
                <h1 className="font-semibold text-[#323232] text-lg lg:text-2xl pb-6">Campaign Title goes here</h1>
                <section className="grid lg:grid-cols-3 gap-2">
                    <section className="col-span-2 bg-white rounded-b-lg">
                        <div className="relative w-full h-0 pb-[59.68%]">
                            <Image
                                alt="campaign-preview-image"
                                src="/images/campaign-page-preview.png"
                                objectFit="cover"
                                fill
                            />
                        </div>
                        <p className="text-[#7D847C] p-4 rounded-b-md text-sm leading-6 lg:leading-8">
                            ECWA Goodnews Church Bukuru (EGNCB) is building a new Sunday school auditorium, with the capacity to hold about 300 children. The structure will host a general worship area on the ground floor and age appropriate Sunday school classes on the first floor. This project is long overdue as for around two decades, the children of EGNCB were housed in an old unconducive zinc building, which was relatively unsafe and made some children either uncooperative or uninterested in attending the Sunday school. This project will facilitate the seamless delivery of children services and motivate the participation of children as well. The funds raised by the Two Pennies project will go towards supporting the realization of the Sunday school rebuilding project in the shortest time possible.ECWA Goodnews Church Bukuru (EGNCB) is building a new Sunday school auditorium, with the capacity to hold about 300 children. The structure will host a general worship area on the ground floor and age appropriate Sunday school classes on the first floor. This project is long overdue as for around two decades, the children of EGNCB were housed in an old unconducive zinc building, which was relatively unsafe and made some children either uncooperative or uninterested in attending the Sunday school. This project will facilitate the seamless delivery of children services and motivate the participation of children as well. The funds raised by the Two Pennies project will go towards supporting the realization of the Sunday school rebuilding project in the shortest time possible.
                        </p>
                    </section>
                    <aside className="">

                    </aside>
                </section>
            </main>

            <footer className="bg-[#1D211C] text-white min-h-20 py-12">
                <section className="app-width grid gap-10 md:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    <div className="md:col-span-3 lg:col-span-2">
                        <div className="">
                            <WhiteLogo />
                        </div>
                        <p className="text-sm font-extralight pt-4 pb-6">Harness the collective strength of our community to drive positive change where it matters most.</p>
                        <ButtonLink cls='whitespace-nowrap w-1/2 md:w-1/3 lg:w-1/2' href='/' name="Create an Acount" ariaLabel="Create an Account" color="white" />

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

export default page
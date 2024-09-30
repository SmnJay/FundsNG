'use client';

import Image from 'next/image'
import React from 'react'
import { ButtonLink } from '../Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const DashboardCarousels = () => {
    return (
        <Swiper
            slidesPerView={1}
            effect='fade'
            spaceBetween={50}
            modules={[Pagination, EffectFade, Autoplay]}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="md:mt-8 lg:w-11/12 lg:mx-auto bg-white flex items-center gap-4 relative overflow-hidden">
                    <Image src='/images/dashboard-banner.png' alt='dashboard banner' width={365} height={332} />
                    <div className="">
                        <h2 className="font-bold text-2xl">Helping People in need around the World</h2>
                        <div className="mt-3">
                            <div className="grid grid-cols-2 mb-3 gap-4">
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#E0FAFF" />
                                            <path d="M9.49072 12.4102H10.6481L14.2721 13.9956C14.8287 14.2392 15.0847 14.8861 14.8454 15.4445V15.4445C14.6048 16.006 13.9546 16.266 13.3932 16.0254L12.3842 15.593" stroke="#4591A1" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.67706 17.2462C9.47124 17.1433 9.22096 17.2268 9.11804 17.4326C9.01513 17.6384 9.09856 17.8887 9.30438 17.9916L9.67706 17.2462ZM14.8854 15.5101L14.5127 15.3238L14.14 16.0692L14.5127 16.2555L14.8854 15.5101ZM16.3101 16.6883L16.1237 17.061L16.3101 16.6883ZM17.8008 17.4569H18.7963V16.6236H17.8008V17.4569ZM19.4907 18.1513V18.2439H20.3241V18.1513H19.4907ZM18.7963 18.9384H14.0121V19.7717H18.7963V18.9384ZM12.2109 18.5131L9.67706 17.2462L9.30438 17.9916L11.8382 19.2585L12.2109 18.5131ZM16.4964 16.3156L14.8854 15.5101L14.5127 16.2555L16.1237 17.061L16.4964 16.3156ZM14.0121 18.9384C13.3868 18.9384 12.7701 18.7928 12.2109 18.5131L11.8382 19.2585C12.5132 19.596 13.2575 19.7717 14.0121 19.7717V18.9384ZM19.4907 18.2439C19.4907 18.6275 19.1798 18.9384 18.7963 18.9384V19.7717C19.64 19.7717 20.3241 19.0877 20.3241 18.2439H19.4907ZM18.7963 17.4569C19.1798 17.4569 19.4907 17.7678 19.4907 18.1513H20.3241C20.3241 17.3076 19.64 16.6236 18.7963 16.6236V17.4569ZM17.8008 16.6236C17.348 16.6236 16.9014 16.5181 16.4964 16.3156L16.1237 17.061C16.6444 17.3213 17.2186 17.4569 17.8008 17.4569V16.6236Z" fill="#4591A1" />
                                            <path d="M15.6298 12.7079L17.3036 14.8002C17.7484 15.3562 18.5941 15.3562 19.0389 14.8002L20.7127 12.7079C20.9406 12.423 21.0647 12.069 21.0647 11.7042V11.6322C21.0647 10.7847 20.3777 10.0977 19.5302 10.0977H19.3581C19.0613 10.0977 18.7767 10.2156 18.5669 10.4254C18.3484 10.6439 17.9941 10.6439 17.7756 10.4254C17.5657 10.2156 17.2811 10.0977 16.9843 10.0977H16.8122C15.9647 10.0977 15.2777 10.7847 15.2777 11.6322V11.7042C15.2777 12.069 15.4019 12.423 15.6298 12.7079Z" fill="#4591A1" />
                                        </svg>

                                        <span className="text-[#5C6269] font-medium">Donate</span>
                                    </div>
                                    <p className="text-xs py-2">Providing assistance in the form of money
                                        and clothing to help others</p>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15.7148" cy="15" r="15" fill="#F2F5A5" />
                                            <g clipPath="url(#clip0_5082_10119)">
                                                <path d="M10.2056 12.4062H11.363L15.0673 14.0269C15.5794 14.251 15.815 14.8462 15.5947 15.3601L15.5254 15.5218C15.304 16.0384 14.7058 16.2777 14.1892 16.0563L13.0991 15.5891" stroke="#213502" strokeWidth="0.763244" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.3762 17.2737C10.1877 17.1794 9.95849 17.2558 9.86423 17.4444C9.76998 17.6329 9.84639 17.8621 10.0349 17.9564L10.3762 17.2737ZM15.5846 15.5376L15.2432 15.3669L14.9019 16.0496L15.2432 16.2202L15.5846 15.5376ZM17.0841 16.714L16.9134 17.0553L17.0841 16.714ZM18.4494 17.4179H19.6046V16.6547H18.4494V17.4179ZM20.2406 18.054V18.3335H21.0039V18.054H20.2406ZM19.6046 18.9695H14.6387V19.7328H19.6046V18.9695ZM12.989 18.58L10.3762 17.2737L10.0349 17.9564L12.6476 19.2627L12.989 18.58ZM17.2548 16.3727L15.5846 15.5376L15.2432 16.2202L16.9134 17.0553L17.2548 16.3727ZM14.6387 18.9695C14.066 18.9695 13.5012 18.8362 12.989 18.58L12.6476 19.2627C13.2658 19.5718 13.9475 19.7328 14.6387 19.7328V18.9695ZM20.2406 18.3335C20.2406 18.6847 19.9558 18.9695 19.6046 18.9695V19.7328C20.3774 19.7328 21.0039 19.1063 21.0039 18.3335H20.2406ZM19.6046 17.4179C19.9558 17.4179 20.2406 17.7027 20.2406 18.054H21.0039C21.0039 17.2812 20.3774 16.6547 19.6046 16.6547V17.4179ZM18.4494 16.6547C18.0347 16.6547 17.6257 16.5581 17.2548 16.3727L16.9134 17.0553C17.3903 17.2938 17.9162 17.4179 18.4494 17.4179V16.6547Z" fill="#213502" />
                                                <path d="M16.3446 12.704L18.0914 14.8875C18.4988 15.3967 19.2733 15.3967 19.6807 14.8875L21.4275 12.704C21.6554 12.4191 21.7796 12.0651 21.7796 11.7003V11.6283C21.7796 10.7808 21.0926 10.0938 20.2451 10.0938H20.073C19.7762 10.0938 19.4916 10.2116 19.2817 10.4215C19.0632 10.64 18.7089 10.64 18.4904 10.4215C18.2806 10.2116 17.996 10.0938 17.6992 10.0938H17.5271C16.6796 10.0938 15.9926 10.7808 15.9926 11.6283V11.7003C15.9926 12.0651 16.1167 12.4191 16.3446 12.704Z" fill="#213502" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5082_10119">
                                                    <rect width="13.8889" height="13.8889" fill="white" transform="translate(9.0481 7.77734)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="text-[#5C6269] font-medium">Assist</span>
                                    </div>
                                    <p className="text-xs py-2">Providing assistance in the form of money
                                        and clothing to help others</p>
                                </div>
                            </div>
                            <ButtonLink ariaLabel='create a campaign link' cls='w-1/3' href='/dashboard/campaigns/create' name='Create a Campaign' color='leafGreen' />
                        </div>
                    </div>
                    <Image src='/images/right-dashboard-ellipse.png' alt='dashboard banner' width={365} height={332} className='absolute right-0 translate-x-10' />
                    <div className="w-[150px]"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="md:mt-8 lg:w-11/12 lg:mx-auto bg-white flex items-center gap-4 relative overflow-hidden">
                    <Image src='/images/dashboard-banner2.png' alt='dashboard banner' width={365} height={332} />
                    <div className="">
                        <h2 className="font-bold text-2xl">Goal Oriented Savings</h2>
                        <div className="mt-3">
                            <div className="grid grid-cols-2 mb-3 gap-4">
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#E0FAFF" />
                                            <path d="M9.49072 12.4102H10.6481L14.2721 13.9956C14.8287 14.2392 15.0847 14.8861 14.8454 15.4445V15.4445C14.6048 16.006 13.9546 16.266 13.3932 16.0254L12.3842 15.593" stroke="#4591A1" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.67706 17.2462C9.47124 17.1433 9.22096 17.2268 9.11804 17.4326C9.01513 17.6384 9.09856 17.8887 9.30438 17.9916L9.67706 17.2462ZM14.8854 15.5101L14.5127 15.3238L14.14 16.0692L14.5127 16.2555L14.8854 15.5101ZM16.3101 16.6883L16.1237 17.061L16.3101 16.6883ZM17.8008 17.4569H18.7963V16.6236H17.8008V17.4569ZM19.4907 18.1513V18.2439H20.3241V18.1513H19.4907ZM18.7963 18.9384H14.0121V19.7717H18.7963V18.9384ZM12.2109 18.5131L9.67706 17.2462L9.30438 17.9916L11.8382 19.2585L12.2109 18.5131ZM16.4964 16.3156L14.8854 15.5101L14.5127 16.2555L16.1237 17.061L16.4964 16.3156ZM14.0121 18.9384C13.3868 18.9384 12.7701 18.7928 12.2109 18.5131L11.8382 19.2585C12.5132 19.596 13.2575 19.7717 14.0121 19.7717V18.9384ZM19.4907 18.2439C19.4907 18.6275 19.1798 18.9384 18.7963 18.9384V19.7717C19.64 19.7717 20.3241 19.0877 20.3241 18.2439H19.4907ZM18.7963 17.4569C19.1798 17.4569 19.4907 17.7678 19.4907 18.1513H20.3241C20.3241 17.3076 19.64 16.6236 18.7963 16.6236V17.4569ZM17.8008 16.6236C17.348 16.6236 16.9014 16.5181 16.4964 16.3156L16.1237 17.061C16.6444 17.3213 17.2186 17.4569 17.8008 17.4569V16.6236Z" fill="#4591A1" />
                                            <path d="M15.6298 12.7079L17.3036 14.8002C17.7484 15.3562 18.5941 15.3562 19.0389 14.8002L20.7127 12.7079C20.9406 12.423 21.0647 12.069 21.0647 11.7042V11.6322C21.0647 10.7847 20.3777 10.0977 19.5302 10.0977H19.3581C19.0613 10.0977 18.7767 10.2156 18.5669 10.4254C18.3484 10.6439 17.9941 10.6439 17.7756 10.4254C17.5657 10.2156 17.2811 10.0977 16.9843 10.0977H16.8122C15.9647 10.0977 15.2777 10.7847 15.2777 11.6322V11.7042C15.2777 12.069 15.4019 12.423 15.6298 12.7079Z" fill="#4591A1" />
                                        </svg>

                                        <span className="text-[#5C6269] font-medium">Personal Savings</span>
                                    </div>
                                    <p className="text-xs py-2">Achieve Your Financial Goals Faster with Focused Savings Strategies. </p>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15.7148" cy="15" r="15" fill="#F2F5A5" />
                                            <g clipPath="url(#clip0_5082_10119)">
                                                <path d="M10.2056 12.4062H11.363L15.0673 14.0269C15.5794 14.251 15.815 14.8462 15.5947 15.3601L15.5254 15.5218C15.304 16.0384 14.7058 16.2777 14.1892 16.0563L13.0991 15.5891" stroke="#213502" strokeWidth="0.763244" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.3762 17.2737C10.1877 17.1794 9.95849 17.2558 9.86423 17.4444C9.76998 17.6329 9.84639 17.8621 10.0349 17.9564L10.3762 17.2737ZM15.5846 15.5376L15.2432 15.3669L14.9019 16.0496L15.2432 16.2202L15.5846 15.5376ZM17.0841 16.714L16.9134 17.0553L17.0841 16.714ZM18.4494 17.4179H19.6046V16.6547H18.4494V17.4179ZM20.2406 18.054V18.3335H21.0039V18.054H20.2406ZM19.6046 18.9695H14.6387V19.7328H19.6046V18.9695ZM12.989 18.58L10.3762 17.2737L10.0349 17.9564L12.6476 19.2627L12.989 18.58ZM17.2548 16.3727L15.5846 15.5376L15.2432 16.2202L16.9134 17.0553L17.2548 16.3727ZM14.6387 18.9695C14.066 18.9695 13.5012 18.8362 12.989 18.58L12.6476 19.2627C13.2658 19.5718 13.9475 19.7328 14.6387 19.7328V18.9695ZM20.2406 18.3335C20.2406 18.6847 19.9558 18.9695 19.6046 18.9695V19.7328C20.3774 19.7328 21.0039 19.1063 21.0039 18.3335H20.2406ZM19.6046 17.4179C19.9558 17.4179 20.2406 17.7027 20.2406 18.054H21.0039C21.0039 17.2812 20.3774 16.6547 19.6046 16.6547V17.4179ZM18.4494 16.6547C18.0347 16.6547 17.6257 16.5581 17.2548 16.3727L16.9134 17.0553C17.3903 17.2938 17.9162 17.4179 18.4494 17.4179V16.6547Z" fill="#213502" />
                                                <path d="M16.3446 12.704L18.0914 14.8875C18.4988 15.3967 19.2733 15.3967 19.6807 14.8875L21.4275 12.704C21.6554 12.4191 21.7796 12.0651 21.7796 11.7003V11.6283C21.7796 10.7808 21.0926 10.0938 20.2451 10.0938H20.073C19.7762 10.0938 19.4916 10.2116 19.2817 10.4215C19.0632 10.64 18.7089 10.64 18.4904 10.4215C18.2806 10.2116 17.996 10.0938 17.6992 10.0938H17.5271C16.6796 10.0938 15.9926 10.7808 15.9926 11.6283V11.7003C15.9926 12.0651 16.1167 12.4191 16.3446 12.704Z" fill="#213502" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5082_10119">
                                                    <rect width="13.8889" height="13.8889" fill="white" transform="translate(9.0481 7.77734)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="text-[#5C6269] font-medium">Group Savings</span>
                                    </div>
                                    <p className="text-xs py-2">Add friends and families to your savings plan.</p>
                                </div>
                            </div>
                            <ButtonLink ariaLabel='start savings link' cls='w-1/3' href='/dashboard/savings/create' name='Start Savings' color='leafGreen' />
                        </div>
                    </div>
                    <div className="w-[150px]"></div>
                    <Image src='/images/right-dashboard-ellipse.png' alt='dashboard banner' width={365} height={332} className='absolute right-0 translate-x-10' />
                </div>
            </SwiperSlide>
        </Swiper >
    )
}

export default DashboardCarousels
'use client';

import React, { useState } from 'react'
import Button from '../Button/Button';
import Image from 'next/image';

const CampaignWrapper = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    const handleIsEmpty = () => setIsEmpty(!isEmpty);

    return (
        <>
            <button onClick={handleIsEmpty} className="p-2 bg-leafGreen-30 mb-4 text-white  text-sm">{isEmpty ? 'Check Not-Empty State' : 'Check empty State'}</button>
            {isEmpty ?
                <div className='flex flex-col items-center justify-center h-full'>
                    <svg width="229" height="229" viewBox="0 0 229 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3882_14263)">
                            <mask id="mask0_3882_14263" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="229" height="229">
                                <path d="M229 0H0V229H229V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_3882_14263)">
                                <path d="M108.554 183.231C165.152 188.959 194.322 175.037 196.063 141.463C198.674 91.1021 154.685 96.5425 141.875 83.2697C129.064 69.997 143.415 88.8592 118.743 61.3549C102.294 43.0185 80.3767 42.9244 52.9901 61.0731C30.8998 79.0521 28.5106 102.631 45.8219 131.808C63.1332 160.984 84.0435 178.126 108.554 183.231Z" fill="#E4E4E4" />
                                <mask id="mask1_3882_14263" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="81" y="57" width="90" height="26">
                                    <path d="M170.63 57.2852H81.5567L81.5054 82.7548H170.578L170.63 57.2852Z" fill="white" />
                                </mask>
                                <g mask="url(#mask1_3882_14263)">
                                    <path d="M82.8317 58.5779C94.2461 58.5779 95.6728 65.3244 95.6728 72.0589V79.4062C95.6728 80.5704 96.5582 81.5164 97.6475 81.5164L164.903 80.9314C165.993 80.9314 166.878 79.9862 166.878 78.8219V70.9011C166.878 63.6758 161.397 57.8174 154.638 57.8174C154.18 57.8174 82.3537 58.5779 82.8317 58.5779Z" fill="#529690" />
                                    <path d="M82.8296 59.8102C82.8296 60.9117 83.7249 61.8056 84.8271 61.8056C154.652 61.8056 154.665 61.8049 154.678 61.8056C159.254 61.8134 162.961 65.553 162.968 70.1694V79.6348H164.943C166.032 79.6348 166.917 78.743 166.917 77.6437V70.1694C166.946 63.3429 161.484 57.7856 154.718 57.7563H154.639H153.902C153.72 57.767 153.544 57.7963 153.365 57.8156H84.8242C83.7228 57.8156 82.8296 58.7087 82.8296 59.8102Z" fill="#529690" />
                                </g>
                                <mask id="mask2_3882_14263" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="54" y="56" width="110" height="120">
                                    <path d="M163.797 56.0024H54.218V175.318H163.797V56.0024Z" fill="white" />
                                </mask>
                                <g mask="url(#mask2_3882_14263)">
                                    <path d="M154.638 61.5598V57.8145H83.5221C74.2038 57.8287 66.6532 65.4428 66.6389 74.8382V172.593C66.6389 173.691 67.5235 174.583 68.6129 174.583H129.503C138.81 174.554 146.342 166.943 146.348 157.559V70.1548V70.0613C146.406 65.4835 150.099 61.5726 154.638 61.5662C154.657 61.5662 154.674 61.5605 154.692 61.5598H154.638Z" fill="white" />
                                    <path d="M83.4838 57.815C74.1647 57.83 66.6134 65.4441 66.5991 74.8395V132.069L109.119 57.7622L83.4838 57.815Z" fill="#C5ECF6" />
                                    <path d="M66.6382 97.922V76.1006C66.6532 66.7045 74.2037 59.0912 83.5228 59.0762H154.638M61.5845 171.877C65.8313 171.877 66.5996 167.365 66.5996 164.513C66.5996 141.194 66.6382 124.711 66.6382 118.797M67.0098 104.589V107.21" stroke="#529690" stroke-width="2.9271" stroke-miterlimit="10" stroke-linecap="round" />
                                    <path d="M154.638 57.7554H153.901C147.447 58.1485 142.408 63.5382 142.399 70.0622V70.2484V157.51C142.387 163.456 138.404 168.647 132.701 170.149C132.078 170.311 131.439 170.391 130.802 170.398V170.4H130.753H130.702H56.8811C59.8445 173.016 63.7211 174.606 67.968 174.61H67.9944H89.2785H129.504C129.938 174.61 130.608 174.61 131.044 174.543C131.81 174.473 132.571 174.344 133.319 174.159C140.964 172.363 146.378 165.495 146.388 157.577V70.1285V70.0358C146.444 65.7447 149.705 62.1927 153.94 61.8046C154.174 61.7918 154.622 61.7932 154.855 61.8046L154.638 57.7554Z" fill="#529690" />
                                </g>
                                <mask id="mask3_3882_14263" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="49" y="152" width="82" height="23">
                                    <path d="M130.863 152.518H49.938V174.959H130.863V152.518Z" fill="white" />
                                </mask>
                                <g mask="url(#mask3_3882_14263)">
                                    <path d="M154.637 57.7549H153.9C147.446 58.1487 142.409 63.5377 142.4 70.0617V70.2479V157.51C142.388 163.456 138.405 168.647 132.702 170.149C131.407 170.486 130.047 170.486 128.753 170.149C123.033 168.626 119.051 163.399 119.067 157.431V154.775C119.075 153.676 118.197 152.777 117.107 152.771H104.595H94.5352H79.0267H62.7891H53.0841C51.9947 152.771 51.1101 153.663 51.1101 154.762V157.577C51.1016 166.976 58.6507 174.601 67.9684 174.609H67.9933H89.2775H129.502C129.937 174.609 130.608 174.609 131.043 174.543C131.81 174.472 132.571 174.344 133.32 174.158C140.964 172.363 146.378 165.495 146.387 157.577V70.1287V70.0353C146.443 65.7449 149.704 62.1915 153.94 61.8048C154.186 61.7913 154.431 61.7913 154.677 61.8048C159.253 61.812 162.961 65.5523 162.968 70.168V79.634H164.942C166.032 79.634 166.917 78.7423 166.917 77.6429V70.168C166.946 63.3415 161.484 57.7848 154.717 57.7549H154.637Z" fill="#529690" />
                                </g>
                                <mask id="mask4_3882_14263" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="229" height="229">
                                    <path d="M0 0H229V229H0V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask4_3882_14263)">
                                    <mask id="mask5_3882_14263" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="68" y="60" width="80" height="111">
                                        <path d="M147.138 60.4604C142.501 60.4604 82.5757 60.4604 82.5757 60.4604L72.0531 67.9511L68.1294 90.6014V152.845C68.1294 152.845 115.927 152.845 117.354 152.845C118.78 152.845 118.959 154.094 118.959 154.985C118.959 155.877 119.851 170.68 130.373 170.68C140.896 170.68 142.323 161.049 142.323 155.699C142.323 150.348 142.323 70.6263 142.323 68.8428C142.323 67.0594 144.463 61.7089 147.138 60.4604Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask5_3882_14263)">
                                        <path d="M158.271 140.651C169.084 131.426 170.387 115.201 161.181 104.41C151.976 93.619 135.748 92.3492 124.935 101.574C114.122 110.798 112.818 127.024 122.024 137.815C131.229 148.606 147.458 149.875 158.271 140.651Z" fill="#C6EBF5" />
                                        <path d="M158.271 140.651C169.084 131.426 170.387 115.201 161.181 104.41C151.976 93.619 135.748 92.3492 124.935 101.574C114.122 110.798 112.818 127.024 122.024 137.815C131.229 148.606 147.458 149.875 158.271 140.651Z" stroke="#C6EBF5" stroke-width="2.9271" stroke-miterlimit="10" />
                                    </g>
                                </g>
                                <path d="M82.5435 135.408H101.844" stroke="#A4CDD5" stroke-width="2.9271" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M82.5435 117.43H101.844" stroke="#A4CDD5" stroke-width="2.9271" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M82.5427 99.4521H126.292" stroke="#529690" stroke-width="2.9271" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M82.5427 80.1909H131.347" stroke="#529690" stroke-width="2.9271" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M159.851 132.847C161.242 131.555 163.417 131.634 164.712 133.022L181.07 150.556C182.361 151.94 182.286 154.108 180.902 155.399L180.896 155.405C179.505 156.696 177.33 156.618 176.035 155.229L159.676 137.696C158.385 136.312 158.461 134.144 159.844 132.853L159.851 132.847Z" fill="#1B7585" />
                                <path d="M163.345 136.479C174.158 127.254 175.46 111.029 166.255 100.238C157.049 89.4472 140.822 88.1773 130.009 97.4017C119.196 106.626 117.892 122.852 127.097 133.643C136.303 144.434 152.532 145.703 163.345 136.479Z" fill="white" />
                                <path d="M163.345 136.479C174.158 127.254 175.46 111.029 166.255 100.238C157.049 89.4472 140.822 88.1773 130.009 97.4017C119.196 106.626 117.892 122.852 127.097 133.643C136.303 144.434 152.532 145.703 163.345 136.479Z" stroke="#1B7585" stroke-width="2.9271" stroke-miterlimit="10" />
                                <path d="M152.383 119.195L149.865 121.539L147.399 118.906L144.798 121.363L142.439 118.831L145.04 116.373L142.591 113.729L145.11 111.384L147.558 114.028L150.192 111.578L152.551 114.111L149.917 116.561L152.383 119.195Z" fill="#1B7585" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_3882_14263">
                                <rect width="229" height="229" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p className="text-FBlack font-medium mb-6  text-sm">Looks like you dont have any ongoing campaigns. Try creating one to get started</p>
                    <Button
                        name='Create Campaign'
                        ariaLabel='create a campaign'
                        color='leafGreen'
                    />
                </div> :
                <div className="space-y-4">
                    <div className="bg-white text-[#5f655e]  text-sm font-semibold rounded-lg p-3">
                        Your Campaigns (3)
                        {/* <Button></Button> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div className="">
                            <div className="bg-white p-4 space-y-4 rounded-t-md">
                                <Image src={'/images/underbridge.png'} width={300} height={120} style={{width: '100%'}} alt='' />
                                <h6 className="text-[#3f4343]  font-semibold">Save the homeless people at Ikeja Underbridge</h6>
                                <p className="text-[#888f87] text-xs">Created 24 April, 2024</p>
                            </div>
                            <button className="w-full  bg-leafGreen-80 text-leafGreen-10 leading-loose py-1 px-2 font-semibold text-sm">Manage Campaign</button>
                        </div>
                        <div className="">
                            <div className="bg-white p-4 space-y-4 rounded-t-md">
                                <Image src={'/images/underbridge.png'} width={300} height={120} style={{width: '100%'}} alt='' />
                                <h6 className="text-[#3f4343]  font-semibold">Save the homeless people at Ikeja Underbridge</h6>
                                <p className="text-[#888f87] text-xs">Created 24 April, 2024</p>
                            </div>
                            <button className="w-full  bg-leafGreen-80 text-leafGreen-10 leading-loose py-1 px-2 font-semibold text-sm">Manage Campaign</button>
                        </div>
                        <div className="grayscale hover:cursor-not-allowed">
                            <div className="bg-white p-4 space-y-4 rounded-t-md">
                                <Image src={'/images/underbridge.png'} width={300} height={120} style={{width: '100%'}} alt='' />
                                <h6 className="text-[#3f4343]  font-semibold">Save the homeless people at Ikeja Underbridge</h6>
                                <p className="text-[#888f87] text-xs">Created 24 April, 2024</p>
                            </div>
                            <button disabled className="w-full  bg-leafGreen-80 text-leafGreen-10 leading-loose py-1 px-2 font-semibold text-sm">This Campaign is no longer active</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CampaignWrapper
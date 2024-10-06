'use client';

import React, { useEffect, useState } from 'react'
import { FaHourglassHalf, FaUserCircle } from 'react-icons/fa';
import { IoIosGift, IoMdShareAlt } from 'react-icons/io';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { RiCalendarTodoFill } from 'react-icons/ri';
import Button from '../Button/Button';
import Image from 'next/image';
import ProgressBar from '../ProgressBar';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getOpenCampaignApiService, initializePaystackforCampaignApiService, verifyPaystackforCampaignApiService } from '@/app/utils/services/campaign/campaignApiService';
import { useSearchParams } from 'next/navigation';
import { ICampaign } from '@/app/utils/models/Model';
import { PaystackButton } from 'react-paystack';
import { PaystackConfig } from '@/app/utils/helper/PaystackUtils';
import DrawerTab from '../Drawer/DrawerTab';
import Input, { InputNumber } from '../Input/Input';
import { CardLoader } from '../Loader/Loader';
import { dateFormatter } from '@/app/utils/helper/dateFormatter';
import moneyFormatter from '@/app/utils/helper/moneyFormatter';
import toast from 'react-hot-toast';
import PercentageCalculator from '@/app/utils/helper/percentageCalculator';

const PreviewCampaign = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [donorEmail, setDonorEmail] = useState('');
  const [donorAmount, setDonorAmount] = useState(0);
  const [paystackConfig, setPaystackConfig] = useState<any>(null); // to store Paystack config

  const [payStackInitializeFormData, setPayStackInitializeFormData] = useState({
    currency: 'NGN',
    userId: null,
    userName: null,
    email: donorEmail,
    amount: donorAmount,
    orderId: null,
    type: 0 //Donation type
  })

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setDonorAmount(0)
    setDonorEmail('')
  };

  const params = useSearchParams().get('url')?.replace(/ /g, '+');;

  const { data: getPreviewOpenCampaign, isLoading: getPreviewOpenCampaignIsLoading } = useQuery<ICampaign>({
    queryKey: ['open-campaign', params],
    queryFn: () => getOpenCampaignApiService(params || '')
  });

  const initializePaystack = useMutation({
    mutationKey: ['initialize-paystack'],
    mutationFn: initializePaystackforCampaignApiService,
    onError: (error) => {
      toast.error('Failed to initialize transaction');
    },
    onSuccess: (data) => {
      toast.success(data.message ?? 'Transaction initialized successfully');
      handlePaystackPayment(data?.data?.referenceId)
    },
  })

  const { mutate: verifyPaystackPayment } = useMutation({
    mutationKey: ['verify'],
    mutationFn: verifyPaystackforCampaignApiService,
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message)
      }
    },
    onError: (error) => {
      console.log(error)
      toast.error('Payment verification failed');
    },
  });

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(getPreviewOpenCampaign?.shareableUrl as string);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link: ' + err);
    }
  };

  const config = PaystackConfig(donorEmail, donorAmount);

  const handlePaystackSuccessAction = (reference: string, trxnref: string, amount: string = '1000') => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    verifyPaystackPayment({ reference, amount, trxnref, userId: '' })
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const paystackProps = {
    ...config,
    text: 'Donate',
    // onSuccess: (reference: any) => handlePaystackSuccessAction(reference, ),
    onClose: handlePaystackCloseAction,
  }

  // Ensure Paystack is only initialized client-side
  useEffect(() => {
    // Set that the component is running on the client
    setIsClient(typeof window !== 'undefined');

    // Dynamically load the Paystack script only if we are in the client
    if (isClient) {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Clean up script when component unmounts
      };
    }
  }, [isClient]);

  const handleInitializePaystack = async () => {
    try {
      initializePaystack.mutateAsync(payStackInitializeFormData)
    } catch (error) {
      toast.error('error occured')
    }
  }

  const handlePaystackPayment = (ref: string) => {
    if (isClient && donorEmail && donorAmount > 0) {
      const handler = (window as any).PaystackPop.setup({
        key: 'pk_test_bbfc5cbc4a3c1e1c50ad34cbf4383512aa389fdc', // Replace with your Paystack public key
        email: donorEmail,
        amount: donorAmount * 100, // Convert to Kobo or smallest currency unit
        reference: ref, // Unique reference
        callback: function (response: any) {
          // Payment successful callback
          toast.success(`Payment successful: ${response.reference}`);
          handlePaystackSuccessAction(ref, response.reference);
          closeDrawer();
        },
        onClose: function () {
          // Payment closed callback
        },
      });
      handler.openIframe();
    } else {
      toast.error('Please enter a valid email and donation amount.');
    }
  };

  useEffect(() => {
    if (getPreviewOpenCampaign) {
      setPayStackInitializeFormData((prev: any) => ({
        ...prev,
        orderId: getPreviewOpenCampaign.id as unknown as string
      }))
    }
  }, [getPreviewOpenCampaign])

  return (
    <main className='app-width py-6'>
      <h1 className="font-semibold text-[#323232] text-lg lg:text-2xl pb-6">{getPreviewOpenCampaign?.name}</h1>
      <section className="lg:grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-lg:space-y-4 relative">
        <section className="lg:col-span-3 bg-white rounded-b-lg">
          <div className="relative w-full h-0 pb-[59.68%]">
            <Image
              alt="campaign preview image"
              src="/images/campaign-page-preview.png"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="text-[#7D847C] p-4 rounded-b-md text-sm leading-6 lg:leading-8">
            {getPreviewOpenCampaignIsLoading ? <CardLoader /> : getPreviewOpenCampaign?.description}
          </p>
        </section>
        <aside className="w-full space-y-4 md:sticky md:top-4 md:self-start lg:col-span-2">
          <div className="bg-white px-4 md:px-6 md:py-6 py-3 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm sm:justify-between mb-4">
              <div className="">{getPreviewOpenCampaignIsLoading ? <CardLoader /> : `₦${moneyFormatter(getPreviewOpenCampaign?.donatedAmount as unknown as string)}`}<span className="font-extralight text-[#888F87] pl-1">Donated</span></div>
              <div className=""> <span className="font-light text-[#888F87] pr-1">Our Goal</span>{getPreviewOpenCampaignIsLoading ? <CardLoader /> : `₦${moneyFormatter(getPreviewOpenCampaign?.targetAmount as unknown as string)}`}</div>
            </div>
            {
              getPreviewOpenCampaignIsLoading ? <CardLoader /> :

                <ProgressBar value={PercentageCalculator(getPreviewOpenCampaign?.donatedAmount ?? 0, getPreviewOpenCampaign?.targetAmount ?? 1)} />
            }
            <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-4">
              <div className="">
                <Image
                  src={'/images/groupAvatar.png'}
                  alt='group avatar'
                  width={183}
                  height={45}
                />
              </div>
              <div className="flex items-center gap-1 text-[12px] whitespace-nowrap font-light cursor-pointer group">
                Donation Activities
                <MdOutlineKeyboardDoubleArrowRight className='group-hover:translate-x-1 transition-all ' />
              </div>
            </div>
            <div className="space-y-4 my-6 text-[#5F655E] font-medium">
              <div className="flex items-center gap-2 text-sm"><FaHourglassHalf />{
                getPreviewOpenCampaignIsLoading ? <CardLoader /> :
                  getPreviewOpenCampaign?.endDate ? `${getPreviewOpenCampaign?.daysLeft.toLocaleString()} Days left` : 'Now'
              }</div>
              <div className="flex items-center gap-2 text-sm"><RiCalendarTodoFill />
                {
                  getPreviewOpenCampaignIsLoading ? <CardLoader /> : dateFormatter(getPreviewOpenCampaign?.endDate?.slice(0, 10) as string)
                }
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-4 max-lg:space-y-2">
              <Button ariaLabel='share campaign' onClick={handleCopyClick} cls='md:text-sm whitespace-nowrap w-full' icon={<IoMdShareAlt size={23} />} name='Share Campaign' />
              <Button onClick={openDrawer} ariaLabel='donate to campaign' cls='md:text-sm whitespace-nowrap w-full' icon={<IoIosGift size={23} />} color='leafGreen' name='Donate Now' />
            </div>
          </div>
          <div className='bg-white rounded-lg px-4 md:px-6 md:py-6 py-3'>
            <h6 className="text-sm">Created By:</h6>
            <div className="flex items-center gap-2 mt-2">
              <FaUserCircle className='text-slate-400' size={40} />
              <ul className="">
                <li className='font-semibold'>{getPreviewOpenCampaignIsLoading ? <CardLoader /> : getPreviewOpenCampaign?.createdBy}</li>
                <li className='text-[#7D847C] font-thin text-sm'>{getPreviewOpenCampaignIsLoading ? <CardLoader /> : getPreviewOpenCampaign?.email}</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>

      {/* drawer */}
      <DrawerTab isOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <h2 className="text-2xl font-bold">Donate</h2>
        <p className="mt-4">
          Here, you can enter your donation details. Feel free to fill out the form and proceed with the payment.
        </p>

        <section className="mt-4">
          <div className="space-y-4">
            <InputNumber
              type='number'
              label='Donation Amount'
              error=''
              placeholder=''
              name='amount'
              onValueChange={(e) => {
                setDonorAmount(+e)
                setPayStackInitializeFormData((prev) => ({
                  ...prev,
                  amount: +e
                }))
              }}
              formatWithCommas
              showCurrency
            />
            <Input
              type='email'
              label='Email Address'
              error=''
              name='email'
              placeholder=''
              where='app'
              onChange={(e) => {
                setDonorEmail(e.target.value);
                setPayStackInitializeFormData((prev) => ({
                  ...prev,
                  email: e.target.value
                }))
              }}
            />
            <Input
              type='text'
              label='Username'
              error=''
              name='userName'
              placeholder='@user123 or can be left blank'
              where='app'
              onChange={(e) => setPayStackInitializeFormData((prev: any) => ({
                ...prev,
                userName: e.target.value
              }))}
            />
            <Button
              onClick={handleInitializePaystack}
              ariaLabel="initialize donate to campaign"
              cls="md:text-sm whitespace-nowrap w-full"
              icon={<IoIosGift size={23} />}
              color="leafGreen"
              name="Initialize Payment"
              processing={initializePaystack?.isPending}
            />
          </div>
        </section>
      </DrawerTab>
    </main>
  )
}

export default PreviewCampaign
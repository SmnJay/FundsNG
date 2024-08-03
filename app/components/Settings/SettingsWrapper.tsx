'use client';

import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import useUpdateParams from '@/app/utils/hooks/useUpdateParams';

const SettingsWrapper = () => {
    const { handleCreateQueryParams, getPathname } = useUpdateParams();

    const handleNotificationParams = () => {
        handleCreateQueryParams('setting', 'notification');
    };

    const handleChangePasswordParams = () => {
        handleCreateQueryParams('setting', 'change-password');
    };

    return (
        <div className="mt-4">
            <div className="bg-white w-fit py-1 px-2 rounded-md flex items-center gap-2">
                <div className="py-2">
                    <input
                        type="radio"
                        defaultChecked
                        className="hidden peer/active"
                        name='tabs'
                        id='active'
                        onClick={handleNotificationParams}
                    />
                    <label htmlFor="active" className="ease-out duration-200 bg-transparent peer-checked/active:bg-leafGreen-50/50 rounded-md font-medium px-4 py-2 text-sm cursor-pointer peer-checked/active:text-leafGreen-5">Notification <span className="max-md:hidden">Settings</span></label>
                </div>
                <div className="">
                    <input
                        type="radio"
                        className="hidden peer/completed"
                        name='tabs'
                        id='completed'
                        onClick={handleChangePasswordParams}
                    />
                    <label htmlFor="completed" className="ease-out duration-200 bg-transparent peer-checked/completed:bg-leafGreen-50/50 rounded-md font-medium px-4 py-2 text-sm cursor-pointer peer-checked/completed:text-leafGreen-5">Change <span className="max-md:hidden">Password</span></label>
                </div>
            </div>

            {getPathname('setting') === 'notification' ? (
                <div className="bg-white mt-3 rounded-md p-4">
                    <h3 className="mt-3 text-sm">Set your notification preference</h3>
                    <ul className="space-y-2 text-sm my-4">
                        <li>
                            <input type="checkbox" name="email" id="email" className='mr-2 accent-leafGreen-5' /> Email Notifications
                        </li>
                        <li>
                            <input type="checkbox" name="sms" id="sms" className='mr-2 accent-leafGreen-5' /> SMS
                        </li>
                        <li>
                            <input type="checkbox" name="in-app" id="in-app" className='mr-2 accent-leafGreen-5' /> In-app Notification
                        </li>
                    </ul>
                    <Button name='Save' ariaLabel='Button to save the notifications settings' color='leafGreen' />
                </div>
            ) : getPathname('setting') === 'change-password' ? (
                <div className="bg-white mt-3 rounded-md p-4">
                    <h3 className="mt-3 text-sm">Change your password</h3>
                    {/* Password change form goes here */}
                </div>
            ) : null}
        </div>
    );
}

export default SettingsWrapper;

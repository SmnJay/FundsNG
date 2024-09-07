import React from 'react';
import SignInForm from '@/app/components/Forms/SignInForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/(pages)/api/auth/[...nextauth]/options';

const SignIn = async () => {
    const session = await getServerSession(authOptions);

    return (
        <SignInForm />
    );
}

export default SignIn
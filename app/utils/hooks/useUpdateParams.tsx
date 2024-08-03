import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react'

const useUpdateParams = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback((name: string, value: string) => {
        const param = new URLSearchParams(searchParams.toString());
        param.set(name, value);

        return param.toString();
    }, [searchParams]);

    const handleCreateQueryParams = (name: string, value: string) => {
        router.push(pathname + '?' + createQueryString(name, value))
    }

    const getPathname = (name: string) => {
        return searchParams.get(name)
    }

    return {
        createQueryString,
        handleCreateQueryParams,
        getPathname
    }

}

export default useUpdateParams
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react'

const useUpdateParams = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const updateParams = (queryType: string, value: string) => {
        const currentQuery = new URLSearchParams(Array.from(searchParams.entries()));

        // Check if the query type is 'page' and if the page query exists
        if (queryType !== "page" && currentQuery.has("page")) {
            currentQuery.set("page", "1"); // Reset the page query to one
        }

        currentQuery.set(queryType, value);
        const queries = currentQuery.toString();
        const query = queries ? `?${queries}` : "";
        router.replace(`${pathname}${query}`);
    };

    const removeQueryParam = (query: string) => {
        const currentQuery = new URLSearchParams(Array.from(searchParams.entries()));
        if (currentQuery) {
            currentQuery.delete(query);
            const queries = currentQuery.toString();
            router.replace(`${pathname}?${queries}`);
        }
    };

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
        removeQueryParam,
        updateParams,
        createQueryString,
        handleCreateQueryParams,
        getPathname,
        searchParams,
        router
    }

}

export default useUpdateParams
'use client'
import { useInfiniteQuery } from "@tanstack/react-query";
import queryString from "query-string";

interface ChatQueryProps {
    queryKey: string;
    apiUrl: string;
    paramKey: 'categoryId';
    paramValue: string;
}

export const useInfiniteStore = ({
    queryKey,
    apiUrl,
    paramKey,
    paramValue
}: ChatQueryProps) => {

    const fetchData = async ({ pageParam = undefined }) => {
        const url = queryString.stringifyUrl({
            url: apiUrl,
            query: {
                nextCursor: pageParam,
                [paramKey]: paramValue
            },
        }, { skipNull: true });

        const res = await fetch(url);
        return res.json();
    }

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteQuery({
        queryKey: [queryKey],
        queryFn: fetchData,
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        refetchInterval: false,
        initialPageParam: undefined
    });

    return {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    }
}

import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';

export const Weather = (location) => {
    const { data, error } = useSWR(
        `/get_weather?q=${location}`,
        fetcher
    );

    return {
        data: data,
        isLoading: !data && !error,
        isError: error,
    };
}
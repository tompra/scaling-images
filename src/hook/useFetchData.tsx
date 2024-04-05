import { useQuery } from '@tanstack/react-query';
import { useSearchContext } from '../context/SearchContext';
import { usePaginationContext } from '../context/PaginationContext';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;
const API_URL = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&per_page=9`;

const useFetchData = () => {
    const { searchTerm } = useSearchContext();
    const { page } = usePaginationContext();
    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ['images', searchTerm, page],
        queryFn: async () => {
            const result = await axios.get(
                `${API_URL}&query=${searchTerm}&page=${page}`
            );
            return result.data;
        },
    });
    return { data, error, isFetching, isLoading };
};
export default useFetchData;

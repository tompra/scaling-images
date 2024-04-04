import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ImagesResponseData } from '../types';
import { useSearchContext } from '../context/SearchContext';
import { ACCESS_KEY } from '../../secrets.json';
import Pagination from './Pagination';
import { usePaginationContext } from '../context/PaginationContext';

const API_URL = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&per_page=9`;

const Gallery = () => {
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

    if (isLoading || isFetching) {
        return (
            <section className='images-container'>
                <h1 className='heading'>Loading...</h1>
            </section>
        );
    }

    if (error) {
        return (
            <section className='images-container'>
                <h1 className='heading'>{`An error has occurred: ${error?.message}`}</h1>
            </section>
        );
    }

    if (data.results.length === 0) {
        return (
            <section className='images-container'>
                <h1 className='heading'>No results are found</h1>
            </section>
        );
    }

    return (
        <section className='images-container'>
            {data.results.map((item: ImagesResponseData) => {
                const url = item?.urls?.regular;
                return <img key={item.id} src={url} className='img' />;
            })}
            {!isLoading && <Pagination />}
        </section>
    );
};
export default Gallery;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ImagesResponseData } from '../types';
import { useSearchContext } from '../context/SearchContext';
import { ACCESS_KEY } from '../../secrets.json';

const API_URL = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&per_page=30&query=`;

const Gallery = () => {
    const { searchTerm } = useSearchContext();
    const { data, error, isLoading } = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${API_URL}${searchTerm}`);
            return result.data;
        },
    });

    if (isLoading) {
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

    if (data.results.length < 1) {
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
        </section>
    );
};
export default Gallery;

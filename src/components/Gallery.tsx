import useFetchData from '../hook/useFetchData';
import { ImagesResponseData } from '../types';
import Image from './Image';

const Gallery: React.FC = (): JSX.Element => {
    const { isFetching, isLoading, error, data } = useFetchData();

    if (isLoading || isFetching) {
        return (
            <section className='images-container'>
                <h1 className='heading loading'>Loading...</h1>
            </section>
        );
    }

    if (error) {
        return (
            <section className='images-container'>
                <h1 className='heading error'>{`An error has occurred: ${error?.message}`}</h1>
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
        <section className='images--container'>
            {data.results.map((item: ImagesResponseData) => {
                const {
                    id,
                    alt_description,
                    urls: { regular },
                } = item;
                return <Image key={id} alt={alt_description} src={regular} />;
            })}
        </section>
    );
};
export default Gallery;

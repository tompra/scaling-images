import useFetchData from '../hook/useFetchData';
import { ImagesResponseData } from '../types';
import Image from './Image';
import useHandleFavorites from '../hook/useHandleFavorites';

const Gallery: React.FC = (): JSX.Element => {
    const { isFetching, isLoading, error, data } = useFetchData();
    const { handleFavoriteClick } = useHandleFavorites(data);

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
                    likes,
                    liked_by_user,
                    links: { download },
                    urls: { regular },
                    description,
                } = item;
                return (
                    <Image
                        key={id}
                        id={id}
                        alt={alt_description}
                        src={regular}
                        likes={likes}
                        liked_by_user={liked_by_user}
                        links={download}
                        description={description}
                        handleFavoriteClick={handleFavoriteClick}
                    />
                );
            })}
        </section>
    );
};
export default Gallery;

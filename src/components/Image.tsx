import { ImageProps } from '../types';
import { useState } from 'react';
import Hover from './Hover';
import { useEffect } from 'react';
import useLocalStorage from '../hook/useLocalStorage';

const Image: React.FC<ImageProps> = ({
    id,
    src,
    alt,
    likes: initialLikes,
    liked_by_user: initialLikedByUser,
    links,
    description,
    handleFavoriteClick,
}): JSX.Element => {
    const { defaultListFavorite } = useLocalStorage();
    const [isHover, setIsHover] = useState<boolean>(false);
    const [likes, setLikes] = useState<number>(initialLikes);
    const [likedByUser, setLikedByUser] = useState<boolean>(initialLikedByUser);

    useEffect(() => {
        const storedImage = defaultListFavorite.find(
            (image: { id: string }) => image.id === id
        );
        if (storedImage) {
            setLikes(storedImage.likes);
            setLikedByUser(storedImage.liked_by_user);
        }
    }, [id, defaultListFavorite]);

    const handleMouseIn = (): void => {
        setIsHover(true);
    };

    const handleMouseOut = (): void => {
        setIsHover(false);
    };

    const handleLikeClick = (): void => {
        setLikedByUser(!likedByUser);
        setLikes((prevLikes) => (likedByUser ? prevLikes - 1 : prevLikes + 1));
        handleFavoriteClick(id);
    };

    return (
        <div
            key={id}
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            className='image--container'
        >
            <img src={src} className='img' alt={alt} />
            {isHover && (
                <Hover
                    likes={likes}
                    likedByUser={likedByUser}
                    links={links}
                    description={description}
                    handleLikeClick={handleLikeClick}
                />
            )}
        </div>
    );
};
export default Image;

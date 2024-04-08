import { useState, useEffect } from 'react';
import { HoverProps } from '../types';

const Hover: React.FC<HoverProps> = ({
    likes: initialLikes,
    liked_by_user: initialLikedByUser,
    links,
    description,
}): JSX.Element => {
    const [totalLikes, setTotalLikes] = useState<number>(initialLikes);
    const [isLikedByUser, setIsLikedByUser] =
        useState<boolean>(initialLikedByUser);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    useEffect(() => {}, [initialLikes, initialLikedByUser]);

    const handleClick = (): void => {
        setTotalLikes(totalLikes + (isLikedByUser ? -1 : 1));
        setIsLikedByUser(!isLikedByUser);
        setIsClicked(!isClicked);
        localStorage.setItem('favoriteImage');
    };

    return (
        <div className='hover--container'>
            <div className='heart--btn__container' onClick={handleClick}>
                <svg
                    className={`${
                        isClicked ? 'heart--btn__clicked' : 'heart--btn__main'
                    }`}
                    viewBox='0 0 512 512'
                    width='100'
                >
                    <path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' />
                </svg>
                <p>{totalLikes}</p>
                <p>{`${isLikedByUser ? 'Liked' : 'Not Liked'}`}</p>
                <p>{`${
                    !description ? 'no description available' : description
                }`}</p>
                <button>
                    <a href={links} target='_blank' rel='noopener noreferrer'>
                        See full image
                    </a>
                </button>
            </div>
        </div>
    );
};
export default Hover;

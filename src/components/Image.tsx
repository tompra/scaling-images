import { ImageProps } from '../types';
import { useState } from 'react';
import Hover from './Hover';

const Image: React.FC<ImageProps> = ({
    id,
    src,
    alt,
    likes,
    liked_by_user,
    links,
    description,
}): JSX.Element => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleMouseIn = (): void => {
        setIsHover(true);
    };

    const handleMouseOut = (): void => {
        setIsHover(false);
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
                    liked_by_user={liked_by_user}
                    links={links}
                    description={description}
                />
            )}
        </div>
    );
};
export default Image;

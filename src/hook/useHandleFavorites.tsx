import useLocalStorage from '../hook/useLocalStorage';
import { FetchDataResponse, ImageFavorite } from '../types';

const useHandleFavorites = (data: { results: FetchDataResponse }) => {
    const { listFavorite, setListFavorite, setLocalStorage } =
        useLocalStorage();

    const handleFavoriteClick = (id: string): void => {
        const clickedImage = data.results.find(
            (image: { id: string }) => image.id === id
        );

        const isAlreadyFavorite = listFavorite.some(
            (favorite: { id: string }) => favorite.id === clickedImage.id
        );

        if (isAlreadyFavorite) {
            const updateRemoveFavorite = listFavorite
                .map((favorite: ImageFavorite) => {
                    if (favorite.id === id) {
                        return {
                            ...favorite,
                            likes: favorite.likes - 1,
                            liked_by_user: !favorite.liked_by_user,
                        };
                    }
                    return favorite;
                })
                .filter((favorite) => favorite.id !== id);
            setListFavorite(updateRemoveFavorite);
            setLocalStorage(updateRemoveFavorite);
        } else {
            const updateAddFavorites = [
                ...listFavorite,
                {
                    ...clickedImage,
                    likes: clickedImage.likes + 1,
                    liked_by_user: true,
                },
            ];
            console.log('addFavorite', updateAddFavorites);
            setListFavorite(updateAddFavorites);
            setLocalStorage(updateAddFavorites);
        }
    };
    return { handleFavoriteClick };
};
export default useHandleFavorites;

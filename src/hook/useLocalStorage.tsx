import { useState } from 'react';
import { ImageFavorite } from '../types';

const useLocalStorage = () => {
    const defaultListFavorite = JSON.parse(
        localStorage.getItem('favoriteList') || '[]'
    );
    const [listFavorite, setListFavorite] = useState<[]>(defaultListFavorite);

    const setLocalStorage = (favorite: ImageFavorite) =>
        localStorage.setItem('favoriteList', JSON.stringify(favorite));
    return {
        listFavorite,
        setListFavorite,
        setLocalStorage,
        defaultListFavorite,
    };
};
export default useLocalStorage;

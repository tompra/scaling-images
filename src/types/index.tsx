import { ReactNode } from 'react';

export type ThemeContextType = {
    toggleDarkTheme: () => void;
    isDarkTheme: boolean;
};

export type ContextProviderProps = {
    children: ReactNode;
};

export type ImagesResponseData = {
    urls: { regular: string };
    id: string;
    alt_description: string;
    likes: number;
    liked_by_user: boolean;
    links: { download: string };
    description: string;
};

export type SearchContextType = {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export type PaginationContextType = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number | string>>;
};

export type ImageProps = {
    id: string;
    src: string;
    alt: string;
    likes: number;
    liked_by_user: boolean;
    links: string;
    description: string;
    handleFavoriteClick: (id: string) => void;
};

export type HoverProps = {
    likes: number;
    likedByUser: boolean;
    links: string;
    description: string;
    handleLikeClick: () => void;
};

export type ImageFavorite = {
    id: string;
    likes: number;
    liked_by_user: boolean;
};

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
    id: string | null | undefined;
};

export type SearchContextType = {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

import { ReactNode } from 'react';

export type ThemeContextType = {
    toggleDarkTheme: () => void;
    isDarkTheme: boolean;
};

export type AppProviderProps = {
    children: ReactNode;
};

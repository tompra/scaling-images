import { createContext, useContext, useState } from 'react';
import { ThemeContextType, AppProviderProps } from '../types/contextTypes';

const AppContext = createContext<ThemeContextType>({
    toggleDarkTheme: () => {},
    isDarkTheme: false,
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    const toggleDarkTheme = (): void => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        const body = document.querySelector('body');
        body?.classList.toggle('dark-theme', newTheme);
    };

    return (
        <AppContext.Provider value={{ toggleDarkTheme, isDarkTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);

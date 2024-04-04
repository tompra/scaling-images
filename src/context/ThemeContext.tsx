import { createContext, useContext, useState } from 'react';
import { ThemeContextType, ContextProviderProps } from '../types/index';

const ThemeContext = createContext<ThemeContextType>({
    toggleDarkTheme: () => {},
    isDarkTheme: false,
});

export const ThemeProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    const toggleDarkTheme = (): void => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);

        const body = document.querySelector('body');
        body?.classList.toggle('dark-theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ toggleDarkTheme, isDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);

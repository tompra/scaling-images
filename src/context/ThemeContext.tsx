import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeContextType, ContextProviderProps } from '../types/index';

const ThemeContext = createContext<ThemeContextType>({
    toggleDarkTheme: () => {},
    isDarkTheme: false,
});

const initialDarkMode = (): boolean => {
    const isDarkModePreferred = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;
    return isDarkModePreferred;
};

export const ThemeProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(initialDarkMode());

    const toggleDarkTheme = (): void => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
    };

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ toggleDarkTheme, isDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);

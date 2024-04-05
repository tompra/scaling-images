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
    const storedLocalStorage = localStorage.getItem('darkTheme');

    if (storedLocalStorage === null) {
        return isDarkModePreferred;
    }

    return storedLocalStorage === 'true';
};

export const ThemeProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(initialDarkMode());

    const toggleDarkTheme = (): void => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('darkTheme', JSON.stringify(newTheme));
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

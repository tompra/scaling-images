import { createContext, useContext, useState } from 'react';
import { ContextProviderProps, SearchContextType } from '../types';

const SearchContext = createContext<SearchContextType>({
    searchTerm: 'coffee',
    setSearchTerm: () => {},
});

export const SearchProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [searchTerm, setSearchTerm] = useState('climbing');
    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = () => useContext(SearchContext);

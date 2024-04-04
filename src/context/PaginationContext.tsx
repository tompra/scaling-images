import { createContext, useContext, useState } from 'react';
import { ContextProviderProps, PaginationContextType } from '../types';

const PaginationContext = createContext<PaginationContextType>({
    page: 1,
    setPage: () => {},
});

export const PaginationProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [page, setPage] = useState(1);
    return (
        <PaginationContext.Provider value={{ page, setPage }}>
            {children}
        </PaginationContext.Provider>
    );
};

export const usePaginationContext = () => useContext(PaginationContext);

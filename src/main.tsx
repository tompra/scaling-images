import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import './styles/index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SearchProvider } from './context/SearchContext.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <SearchProvider>
            <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </SearchProvider>
    </ThemeProvider>
);

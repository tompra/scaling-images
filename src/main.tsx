import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';
import { AppProvider } from './context/context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppProvider>
        <App />
    </AppProvider>
);

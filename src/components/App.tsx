import useFetchData from '../hook/useFetchData';
import Gallery from './Gallery';
import Pagination from './Pagination';
import Search from './Search';
import ThemeToggle from './ThemeToggle';

const App: React.FC = (): JSX.Element => {
    const { isLoading, isFetching, error } = useFetchData();
    return (
        <main>
            <ThemeToggle />
            <Search />
            <Gallery />
            {isLoading || isFetching || error ? null : <Pagination />}
        </main>
    );
};
export default App;

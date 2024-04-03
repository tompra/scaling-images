import Gallery from './Gallery';
import Search from './Search';
import ThemeToggle from './ThemeToggle';

const App: React.FC = (): JSX.Element => {
    return (
        <main>
            <ThemeToggle />
            <Search />
            <Gallery />
        </main>
    );
};
export default App;

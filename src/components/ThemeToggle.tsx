import { useGlobalContext } from '../context/context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
    return (
        <section className='toggle--btn__container'>
            <button className='toggle--btn__theme' onClick={toggleDarkTheme}>
                {isDarkTheme ? (
                    <BsFillSunFill className='toggle--btn__icon' />
                ) : (
                    <BsFillMoonFill className='toggle--btn__icon' />
                )}
            </button>
        </section>
    );
};
export default ThemeToggle;

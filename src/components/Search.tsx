import { ChangeEvent, useState } from 'react';
import { useSearchContext } from '../context/SearchContext';

const Search: React.FC = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const { setSearchTerm } = useSearchContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userInput = e.currentTarget.search.value;
        if (!userInput) return;
        setSearchTerm(userInput);
        setInputValue('');
    };

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const userValue = e.target.value;
        setInputValue(userValue);
    };

    return (
        <section className='search--container'>
            <h1 className='search--title'>scaling images</h1>
            <form className='search--form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='search'
                    placeholder='Search your image...'
                    className='form--input__search'
                    onChange={onSearchChange}
                    value={inputValue}
                />
                <button type='submit' className='form--btn__search'>
                    search
                </button>
            </form>
        </section>
    );
};
export default Search;

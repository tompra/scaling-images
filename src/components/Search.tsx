import { ChangeEvent, useState } from 'react';

const Search = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userInput = e.currentTarget.search.value;
        if (!userInput) return;
        console.log(userInput);
        setInputValue('');
    };

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const userValue = e.target.value;
        setInputValue(userValue);
    };

    return (
        <section className='search--container'>
            <h1>scaling images</h1>
            <form className='search--form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='search'
                    placeholder='search...'
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

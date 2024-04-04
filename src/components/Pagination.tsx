import { usePaginationContext } from '../context/PaginationContext';

const Pagination = () => {
    const { page, setPage } = usePaginationContext();

    const handlePages = (pageNumber: number | string) => {
        switch (pageNumber) {
            case 'prev':
                setPage((prev: number | string) => {
                    if (typeof prev === 'number') {
                        return prev - 1;
                    } else {
                        return prev;
                    }
                });
                break;
            case 'next':
                setPage((next: number | string) => {
                    if (typeof next === 'number') {
                        return next + 1;
                    } else {
                        return next;
                    }
                });
                break;
            default:
                setPage(pageNumber);
                break;
        }
    };
    return (
        <section className='pagination--container'>
            <button onClick={() => handlePages('prev')} disabled={page === 1}>
                Prev
            </button>
            {[...Array(10)].map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePages(index + 1)}
                    className={page === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}

            <button onClick={() => handlePages('next')} disabled={page === 10}>
                Next
            </button>
        </section>
    );
};
export default Pagination;

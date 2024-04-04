import { usePaginationContext } from '../context/PaginationContext';
import { GrFormNext, GrFormPrevious, GrPrevious } from 'react-icons/gr';

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
            <button
                className='pagination--btn'
                onClick={() => handlePages('prev')}
                disabled={page === 1}
            >
                <GrFormPrevious className='pagination--icon' />
            </button>

            {Array.from({ length: 10 }).map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePages(index + 1)}
                    className={
                        page === index + 1
                            ? 'active pagination--btn'
                            : 'pagination--btn'
                    }
                >
                    {index + 1}
                </button>
            ))}

            <button
                className='pagination--btn'
                onClick={() => handlePages('next')}
                disabled={page === 10}
            >
                <GrFormNext className='pagination--icon' />
            </button>
        </section>
    );
};
export default Pagination;

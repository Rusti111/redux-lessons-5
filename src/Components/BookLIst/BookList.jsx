import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import fetchAllBooks from '../../store/redusers/bookListCreator';
import BooksListItem from './BookListItem';

const BookList = () => {
    const { books, booksError, booksStatus } = useSelector((state) => state.bookList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBooks());
    }, []);

    const booksCases = {
        pending: 'loadind...',
        fulfilled: books?.map((book) => <BooksListItem key={book.id} book={book} />),
        rejected: booksError,
    };

    return <div>{booksCases[booksStatus]}</div>;
};

export default BookList;

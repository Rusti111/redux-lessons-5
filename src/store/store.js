// import { configureStore } from '@reduxjs/toolkit';
// import bookListReducer from "./slices/BookListSlices";

// const rootReducer = {
//     bookList: bookListReducer,
// };

// const store = configureStore({ reducer: rootReducer });

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import bookListReducer from "./slices/BookListSlices";

// const rootReducer = {
//     bookList: bookListReducer,
// };

// const store = configureStore = ({ reducer: rootReducer });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import bookListReducer from "./slices/BookListSlices";

const rootReducer = {
    bookList: bookListReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;

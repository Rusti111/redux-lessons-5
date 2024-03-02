import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001',
});

const getBooks = () => instance.get('./books');
const getCart = () => instance.get('./cartItem');
const addToCart = (payload) => instance.post('./cartItem', payload);
const editCartItem = (payload) => instance.put(`./cartItems/${payload.id}`, payload);
const deleteCartItem = (id) => instance.delete(`./cartItem/${id}`);

const api = {
    getBooks,
    getCart,
    addToCart,
    editCartItem,
    deleteCartItem,
};

export default api;

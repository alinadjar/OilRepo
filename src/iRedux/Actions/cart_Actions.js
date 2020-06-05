import { CART_ADD, CART_UPDATE, CART_REMOVE, CART_CLEAR } from './types';

export const addToCart = (product, quantity) => ({
    type: CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});
export const updateCartQuantity = (product, quantity) => ({
    type: CART_UPDATE,
    payload: { product, quantity }
})
export const removeFromCart = (product) => ({
    type: CART_REMOVE,
    payload: product
})
export const clearCart = () => ({
    type: CART_CLEAR
})
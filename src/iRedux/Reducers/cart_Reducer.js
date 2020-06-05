import { CART_ADD, CART_UPDATE, CART_REMOVE, CART_CLEAR } from '../Actions/types';

const CartReducer = (storeData, action) => {

    let newStore = { cart: [], cartItems: 0, cartPrice: 0, cartDiscount:0, ...storeData }

    switch (action.type) {
        case CART_ADD:
            const p = action.payload.product;
            const q = action.payload.quantity;
            let existing = newStore.cart.find(item => item.product.id === p.id);
            if (existing) {
                existing.quantity += q;
            } else {
                newStore.cart = [...newStore.cart, action.payload];
            }


            newStore.cartItems += q;
            newStore.cartPrice += (p.price - p.discount) * q;
            newStore.cartDiscount += p.discount * q;

            if(existing && existing.quantity === 0) {
                newStore.cart = newStore.cart.filter(item => item.product.id !== p.id);
            }
            
            return newStore;

        case CART_UPDATE:
            newStore.cart = newStore.cart.map(item => {
                if (item.product.id === action.payload.product.id) {
                    const diff = action.payload.quantity - item.quantity;
                    newStore.cartItems += diff;
                    newStore.cartPrice += ((item.product.price-item.product.discount) * diff);
                    newStore.cartDiscount += item.product.discount * diff;
                    return action.payload;
                } else {
                    return item;
                }
            });
            return newStore;

        case CART_REMOVE:
            let selection = newStore.cart.find(item =>
                item.product.id === action.payload.id);
            newStore.cartItems -= selection.quantity;
            newStore.cartPrice -= selection.quantity * (selection.product.price-selection.product.discount);
            newStore.cart = newStore.cart.filter(item => item !== selection);
            return newStore;

        case CART_CLEAR:
            return { ...storeData, cart: [], cartItems: 0, cartPrice: 0, cartDiscount: 0 }

        default:
            return newStore || {};
    }
}


export default CartReducer;
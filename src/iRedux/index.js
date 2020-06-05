import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import commonReducer from './Reducers/common';
import cartReducer from './Reducers/cart_Reducer';
import shopReducer from './Reducers/shop_Reducer';
import {reducer as toastrReducer} from 'react-redux-toastr'


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage 

import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
//-----------------------Middlewares 
// import { RestMiddleware4Post } from '../webService/RestMiddleware';
const middleware = [
    reduxThunk,
    reduxPromise,
    // RestMiddleware4Post('https://jsonplaceholder.typicode.com/posts')
];


const rootReducer = combineReducers({
    common: commonReducer,
    cart: cartReducer,
    shop: shopReducer,
    toastr: toastrReducer // <- Mounted at toastr.
});



const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    persistedReducer, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(...middleware)
    ))


export default store;
export const persistor = persistStore(store)
// export default () => {
//     let store = createStore(
//         persistedReducer, /* preloadedState, */
//         composeEnhancers(
//             applyMiddleware(...middleware)
//         ))

//     return { store, persistor }
// }

// const store = createStore(
//     rootReducer, /* preloadedState, */
//     composeEnhancers(
//         applyMiddleware(...middleware)
//     ));

// export default store;

// export default createStore(
//     rootReducer, 
//     compose(applyMiddleware(...middlewares),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//     );
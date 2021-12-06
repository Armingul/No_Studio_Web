// Aqui crearemos el Redux store
// Contiene el arbol de estado de la aplicacion
// Se ejecutara cada vez que una accion esdespachada y algunas partes
// del arbol pueden haber cambiado.

//Redux tiene una extension para poder ver el estado del store
import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
};
const reducer = combineReducers({
    productsList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;
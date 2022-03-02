// Aqui crearemos el Redux store
// Contiene el arbol de estado de la aplicacion
// Se ejecutara cada vez que una accion esdespachada y algunas partes
// del arbol pueden haber cambiado.

//Redux tiene una extension para poder ver el estado del store
import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
    orderCreateReducer,
    orderDetailsReducer,
} from './reducers/orderReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import {
    userRegisterReducer,
    userSigninReducer,
  } from './reducers/userReducers';

const initialState = {
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethod: 'PayPal',
    },
};
const reducer = combineReducers({
    productsList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
})
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;
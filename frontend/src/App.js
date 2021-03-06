import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigningScreen';
import ListProductsScreen from './screens/ListProductScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PrivateRoute from './components/PrivateRoute';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              NoStudio
            </Link>
          </div>
          <div>
          <Link to="listProducts">Coleccion </Link>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                    <Link to="#">
                      {userInfo.name}<i className="fa fa-caret-down"></i>{' '}
                    </Link>
                    <ul className="dropdown-content">
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                      <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Orders</Link>
                  </li>
                    </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )
            }
            
          </div>
        </header>
        <main>
          <Route path="/listProducts" component={ListProductsScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;


 
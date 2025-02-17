import React, { Fragment,useEffect } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


import Navbar from './components/Layout/Navbar'
import Landing from './components/Layout/Landing'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Vendor_Add from './components/Vendor/Vendor_Add'
import Vendor_Home from './components/Vendor/Vendor_Home'
import VendorPlaced from './components/Vendor/VendorPlaced'
import VendorDispatched from './components/Vendor/VendorDispatched'
import Customer_Home from './components/Customer/Customer_Home'
import CustomerListOrder from './components/Customer/CustomerListOrder'
import CustomerOrder from './components/Customer/CustomerOrder'
import CustomerOrderEdit from './components/Customer/CustomerOrderEdit'
import CustomerOrderReview from './components/Customer/CustomerOrderReview'
import CustomerVendorReview from './components/Customer/CustomerVendorReview'

// redux store
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>

     <Router>
      <Fragment>
        <Navbar/>
        <Route exact path='/' component={Landing}/>  
        <section className='container'>
          <Switch>
          <Route exact path='/register' component={Register}/>  
          <Route exact path='/login' component={Login}/>  
          <Route exact path='/vendor/add' component={Vendor_Add}/>  
          <Route exact path='/vendor/home' component={Vendor_Home}/>  
          <Route exact path='/vendor/placed' component={VendorPlaced}/>  
          <Route exact path='/vendor/review' component={VendorDispatched}/>  
          <Route exact path='/customer/home' component={Customer_Home}/>  
          <Route exact path='/customer/product/:id' component={CustomerOrder}/>  
          <Route exact path='/customer/product/edit/:id' component={CustomerOrderEdit}/>  
          <Route exact path='/customer/product/review/:id' component={CustomerOrderReview}/>  
          <Route exact path='/customer/orders' component={CustomerListOrder}/>  
          <Route exact path='/customer/vendor/rate/:id' component={CustomerVendorReview}/>  
            
          </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;

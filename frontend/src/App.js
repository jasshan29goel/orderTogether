import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


import Navbar from './components/Layout/Navbar'
import Landing from './components/Layout/Landing'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Vendor from './components/Product/Vendor'
import Customer from './components/Product/Customer'

// redux store
import { Provider } from 'react-redux';
import store from './store';

function App() {
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
          <Route exact path='/vendor' component={Vendor}/>  
          <Route exact path='/customer' component={Customer}/>  
            
          </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;

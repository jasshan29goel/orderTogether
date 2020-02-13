import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

// import UsersList from './components/users-list.component'
// import CreateUser from './components/create-user.component'

import Navbar from './components/Layout/Navbar'
import Landing from './components/Layout/Landing'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Products from './components/Object/Products'

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
          <Route exact path='/products' component={Products}/>  
            
          </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;

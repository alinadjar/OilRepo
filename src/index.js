import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import 'bootstrap/dist/css/bootstrap.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import $ from 'jquery';
import 'popper.js/dist/popper';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';


import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from './iRedux';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import ProductsPage from './components/Products';
import SingleCategoryPage from './components/SingleCategoryPage';
import ContactUs from './components/ContactUs';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact={true} component={App} />
              <Route path="/products" exact={true} component={ProductsPage} />
              <Route path='/contactus' component={ContactUs} />
              {/* <Route path='/categories/:catID?' exact={true} component={CategoryPage} /> */}
              {/* <Route path='/checkout' component={Checkout} /> */}
              <Route path='/products/category/:catID'  exact={true} component={SingleCategoryPage}/>
              <Redirect to="/products" from='/products/category/:catID' />              
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Contact from './containers/Contact';
import ListingDetails from './containers/ListingDetail';
import Listings from './containers/Listings';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import About from './containers/About';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';

import './sass/main.scss';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/listings' element={<Listings />} />
        <Route exact path='/listings/:id' element={<ListingDetails />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
    </Provider>
  );
}

export default App;

import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AuthState from './context/auth/AuthState';
import ContactStates from './context/contact/ContactState'
import Home from './components/pages/Home';
import About from './components/pages/About';
 import Navbar from './components/layout/Navbar';
 import Register from './components/auth/Register';
 import Login from './components/auth/Login';
 import Alerts from './components/layout/Alerts';
 import AlertState from './context/alert/AlertState';
 import PrivateRoute from './components/routing/PrivateRoute';
 import setAuthToken from './utils/setAuthToken';
import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
    <ContactStates>
      <AlertState>
<BrowserRouter>
<Fragment>
  <Navbar />
  <Alerts />
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        
      </Routes>
    </Fragment>
    </BrowserRouter>
    </AlertState>
    </ContactStates>
    </AuthState>
  );
}

export default App;



// This is a React Router v6 app


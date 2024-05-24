import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Courses from './components/Pages/Courses';
import AboutUs from './components/Pages/AboutUs';
import ShoppingCart from './components/Pages/ShoppingCart';
import SignUp from './components/Pages/SignUp';
import loginpages from './components/Pages/loginpages';
import AllCourses from './components/Pages/AllCourses';
import { CartProvider } from './components/util/CartContext.js';
import { UserProvider } from './components/util/usercontext';
import Profile from './components/Pages/Profile.js';
import YourCourses from './components/Pages/YourCourses.js';
import QRCodeGenerator from './components/Pages/QRgenerate.js'
import CheckingSlip from './components/Pages/CheckingSlip.js';
import ChoosePayment from './components/Pages/ChoosePayment.js';
import Omisetest from './components/Pages/omisetest.js'

function App() {

  return (
    <>
    <UserProvider>
    <CartProvider>
      <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/courses' Component={Courses}/>
        <Route path='/AboutUs' Component={AboutUs}/>
        <Route path='/shopping-cart' Component={ShoppingCart}/>
        <Route path='/sign-up' Component={SignUp} />
        <Route path='/log-in' Component={loginpages} />
        <Route path='/all-course' Component={AllCourses} />
        <Route path='/profile' Component={Profile} />
        <Route path='/yourcorses' Component={YourCourses} />
        <Route path='/payment-choosing' Component={ChoosePayment} />
        <Route path='/payment/qrpayment' Component={QRCodeGenerator} />
        <Route path='/Checkingslip' Component={CheckingSlip} />
        <Route path='/omisetest' Component={Omisetest} />
      </Routes> 
    </Router>
    </CartProvider>
    </UserProvider>
    </>
  );
}

export default App;

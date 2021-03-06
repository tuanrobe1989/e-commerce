import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App(){
 return (
  <div>
      <Route path='/' exact component={HomePage} />
      <Route path='/shop' component={ShopPage} />
  </div>
 )
}

export default App;

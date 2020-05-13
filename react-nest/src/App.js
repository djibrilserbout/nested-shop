import React from 'react';

import './App.css';
import Home from './Views/Home';
import Login from './Views/Login';
import Signup from './Views/Signup';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Products from './Views/Products';
import Cookies from 'js-cookie'

function App() {

  var user = "";
  var isLogged = false;

  user = Cookies.get('user');
  if (user === undefined) {
    user = "Guest";
    isLogged = false; 
  }
  else {
    user = Cookies.get('user'); 
    isLogged = true; 
  }

  var handleSubmit = e => {
    e.preventDefault();
    axios
    .post("http://localhost:3000/api/v1/logout")
    .then(res => {  
      Cookies.remove('user');
      window.location.reload(); 
    })
    .catch(err => console.log(err));
  }
  return (
    <Router>
    <div className="App">
      <header className="App-header">
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand">Nested Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link">
        <Link to='/'>Home</Link>
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link">
        <Link to='/products'>Shop</Link>
      </a>
    </li>
    {!isLogged && 
      <div className="guest-items">
    <li className="nav-item">
      <a className="nav-link">
        <Link to='/auth'>Login</Link>
      </a>
    </li>
    
    <li className="nav-item">
      <a className="nav-link">
        <Link to='/signup'>Sign up</Link>
      </a>
    </li>
    </div>
    }
    {isLogged &&
      <div className="guest-items">
      <button className="btn btn-primary">{user}</button>
    <li className="nav-item">
      <a className="nav-link">
        <button className="btn btn-danger" onClick={handleSubmit}>Log out</button>
      </a>
    </li>
    </div>
    }
    
    </ul>
  </div>
</nav>
      </header>
      <Route exact path='/' component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/auth' component={Login} />
      <Route path='/signup' component={Signup} />


    </div>
    </Router>
  );
}

export default App;

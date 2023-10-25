import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import LoginPage from './components/Login Page/LoginPage.jsx'
import RegisterPage from './components/Register Page/RegisterPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/LoginPage' component={LoginPage} />
      <Route path='/RegisterPage' component={RegisterPage} />
    </Router>
  </div>
)

import './App.css'
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BoxArrowRight, PersonPlus } from 'react-bootstrap-icons';
import reactLogo from './assets/react.svg';

class App extends Component {

  constructor() {
    super();
    this.toRegisterPage = this.toRegisterPage.bind(this);
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  toRegisterPage() {
    this.props.history.push('RegisterPage');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img src={reactLogo} alt="" id='reactlogo' /> &nbsp; Login / Register - React Version
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">

                </li>
                <li className="nav-item">

                </li>
                <li className="nav-item">

                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-secondary" type="button" onClick={this.toRegisterPage}>
                  <PersonPlus /> Register Page
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }

}

export default App

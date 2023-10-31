import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './LoginDesign.css';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import reactlogo from '../../assets/react.svg'

class LoginPage extends Component {

  constructor() {
    super();
    this.toAppPage = this.toAppPage.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.state = {
      showPassword: false
    }
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  toAppPage() {
    this.props.history.push('/');
  }

  togglePasswordVisibility() {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }

  render() {
    var passwordInputType = this.state.showPassword ? "text" : "password";

    return (
      <div className='LoginAccountBox'>
        <img src={reactlogo} alt="" id='reactlogo'/>
        <h3>Login Page</h3>
        <form action="" method="post">

          <input name='userEmail' className="form-control" type="email" placeholder="Enter Email Address" aria-label="default input example" />
          <label htmlFor="userEmail">Email</label><br />

          <div className='seePassword'>
            <input className="form-control" type={passwordInputType} placeholder="Enter Password" aria-label="default input example" />
            {this.state.showPassword ? (
              <EyeSlashFill id='eye' onClick={this.togglePasswordVisibility} />
            ) : (
              <EyeFill id='eye' onClick={this.togglePasswordVisibility} />
            )}
          </div><br />
          <label htmlFor="userPassword">Password</label><br />

          <button name='userPassword' type="submit" className="btn btn-primary">Login Account</button>

        </form>
        Don't Have an Account? <Link to={'/RegisterPage'}>Register Account</Link><br />
        <button id='toAppBtn' type="button" className="btn btn-secondary" onClick={this.toAppPage}>Back to App Page</button>
      </div>
    );
  }

}

export default LoginPage

import React, { Component } from 'react'
import './RegisterDesign.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import reactlogo from '../../assets/react.svg';

class RegisterPage extends Component {

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
      <div className='RegisterAccountBox'>
        <img src={reactlogo} alt="" id='reactlogo'/>
        <h3>Register Page</h3>
        <form action="" method="post">

          <input name='newLname' className="form-control" type="text" placeholder="Enter Last Name" aria-label="default input example" />
          <label htmlFor="newLname">Last Name</label>

          <input name='newFname' className="form-control" type="text" placeholder="Enter First Name" aria-label="default input example" />
          <label htmlFor="newFname">First Name</label>

          <input name='newEmail' className="form-control" type="email" placeholder="Enter Email Address" aria-label="default input example" />
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

          <button type="button" className="btn btn-primary">Register Account</button>

        </form>
        Already Have an Account? <Link to={'/LoginPage'}>Login Account</Link><br />
        <button id='toAppBtn' type="button" className="btn btn-secondary" onClick={this.toAppPage}>Back to App Page</button>
      </div>
    );
  }

}

export default RegisterPage

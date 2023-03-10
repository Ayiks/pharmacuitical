import React, { useState } from 'react';
import logo from '../../images/pilplus.jpg';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   // Send username and password to server for authentication
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  fetch('http://127.0.0.1:4000/pharmacy/login', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(requestOptions);
      console.log(data);
      // Handle authentication response from server
      if (data.success) {
        // Successful login
        console.log('Successful login!');
      } else {
        // Invalid login credentials
        console.log('Invalid login credentials!');
      }
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src={logo} alt="Logo" className="mx-auto d-block mb-4" width="72" height="72" />
              <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-floating">
                <input type="email" value={email} onChange={handleEmailChange} className="form-control" id="floatingInput" placeholder="Email" required/>
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                  <input type="password" value={password} onChange={handlePasswordChange} className="form-control" id="floatingPassword" placeholder="Password" required />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              </form>
            </div>
            
          </div>
          <p class="card-text">2023 &copy;Ayiks Inc. - Pharmacy System. All rights reserved. </p>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
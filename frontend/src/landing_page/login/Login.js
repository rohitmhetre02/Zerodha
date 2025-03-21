import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
      alert(response.data.message); 
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed'); 
    }
  };

  return (
    <div className='container'>
      <div className='row p-5'>
        <h1 className='text-center'>Open a free demat and trading account</h1>
        <p className='text-center'>Start investing brokerage free and join a community of 1+ crore investors and traders</p>
        
        <div className="col-md-6 col-12 p-5 mt-5">
          <img src="media/images/account_open.png" alt="Account Open" className="img-fluid" />
        </div>
        
        <div className="col-md-6 col-12 p-5 mt-5">
          <h1>Login now</h1>
          <p>Or track your existing application</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="password" className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button className="btn btn-success mt-3" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
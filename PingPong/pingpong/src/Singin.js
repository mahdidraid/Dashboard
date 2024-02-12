import React, { useState } from "react";
import axios from "axios";
import './css/Singin.css'
import { Link } from 'react-router-dom';
export default function Singin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e) {
    e.preventDefault();
    // Assuming setAccept, setFlag, and name are declared somewhere in your component

    // if (name === '' || password.length < 8 || passwordR !== password) {
    //   setFlag(false);
    // }

    // if (flag) {
    axios
      .post("your-api-endpoint", {
        // Assuming name and passwordR are declared somewhere in your component
        // name: name,
        email: email,
        password: password,
        // password_confirmation: passwordR,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    // }
  }

  return (
    <section className="login">
      <div className="continar">
        <div className="image">
          <img src={require('./imgs/landing.jpg')} alt="" />
        </div>
        <div className="info">
          <p>
            <span>Login</span> Your Account
          </p>
          <div className="inputs">
            <input
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forget">
              <div className="remember">
                <input
                  name="remember"
                  id="remember"
                  type="checkbox"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#">Forget Password ?</a>
            </div>
            <button type="submit" onClick={submit}>Sign in</button>

            <button type="submit">
                <Link to="/singup" className="signup-btn">Sign up</Link>
            </button> 
          </div>
          <p>Or, Sign up with</p>
          <div className="social">
            <a href="#">
              <img src={require('./imgs/42.png')}  />
            </a>
            <a href="#">
            <img src={require('./imgs/social.png')}  />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import axios from "axios";
import './css/Singup.css'

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordR, setPasswordR] = useState('');
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true);

  function submit(e) {
    e.preventDefault();
    setAccept(true);

    if (name === '' || password.length < 8 || passwordR !== password) {
      setFlag(false);
    }

    if (flag) {
      axios
        .post("your-api-endpoint", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
  }

  return (
    <section className="login">
      <div className="continar">
        <div className="image">
        <img src={require('./imgs/landing.jpg')}  />
        </div>
        <div className="info">
          <div className="inputs">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordR(e.target.value)}
            />
            <input type="submit" value="Sign up" onClick={submit} />
          </div>
          <p>Or, Sign up with</p>
          <div className="social">
            <a href="#">
            <img src={require('./imgs/42.png')}  />
            </a>
            <a href="">
            <img src={require('./imgs/social.png')}  />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

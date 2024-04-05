import React, { useState } from "react";
import "./login.css";
import logo from "../img/OnlyLogo.png"
import logoWithOssianNotes from "../img/OasisNotes.png"
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login_user } from "../Api_Collection/Api.js";
import Loader from './LandingPage/Loader';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    login_user(data, navigate,);
  };
  return (
    <div className="main-div-login">
      <div className="top-div-login">
        <div style={{display:'grid',placeItems:"center",paddingTop:"10%"}}>

        <img
          style={{ maxHeight:"150px", maxWidth:"460px"}}
          src={logoWithOssianNotes}
          // src={"login.png"}
          alt="login-banner"
          />
          </div>
      </div>
      <div className="bottom-div-login">
        <Form className="login-form" onSubmit={handleSubmit}>
          <h2
            style={{ fontWeight: "bold", fontSize: "1.4rem", color: "black" }}
          >
            Enter Your Credentials to Log In
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <button className="login-btn" type="submit">
            Login fgfh
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

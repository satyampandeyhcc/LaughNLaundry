import React, { useState } from "react";
import "../signin.css";
import {Link, useNavigate} from "react-router-dom"
import loginimg from "../Component/images/Signup.jpeg";
import image11 from "../Component/images/eyeimg.png";
import image12 from "../Component/images/Googleimg.png";
import axios from "axios";
import logo from "../Component/images/logo_tagline-removebg-preview.png";

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [rememberMe, setRememberMe] = useState(false);

  const handleToggleRememberMe = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here using formData
    // console.log("Login submitted:", formData);
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
console.log(data);
    

      // Save the token to localStorage or state for future requests

      console.log('Login successful', data);
      const email=data.user.email;
      const id =data.user.id;
      localStorage.setItem("id",id);
      localStorage.setItem("email", email);
      const token = data.token
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="LoginForm py-lg-0 py-4">
      <div className="loginimg mt-lg-0">
        <img className="mt-4 mt-lg-0" src={loginimg} alt=""></img>
      </div>

      <div className="loginform px-4 px-lg-0">
        {/* logo */}
      <div className="col-lg-6  col-md-6 col-sm-12 mx-auto text-center">
        <Link to="/">
          <div className="d-inline-block my-logo-container">
            <img className="my-logo-footer" alt="logo-img" src={logo} />
          </div>
        </Link>
      </div>



        <div className="medpara">
          <p>Nice to see you again</p>
        </div>
        <br></br>
        <div className="loginform23">
          <form onSubmit={handleSubmit}>
            <label style={{display:"unset"}}>
              <p>Login</p>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email or phone number"
                required
              />
            </label>

            <label style={{display:"unset"}}>
              <p>Password</p>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <img src={image11} alt="Show Password" />
                  ) : (
                    <img src={image11} alt="Hide Password" />
                  )}
                </button>
              </div>
            </label>
          </form>
          <div className="tog_rem_forget ">
            <label style={{display:"unset"}} className="toggle-switch">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
            <h4>Remember me</h4>
            <Link to={'/forgot-pass'}>
            <button type="button frgt-btn mt-0"> Forgot password?</button>
            </Link>
          </div>
          <br />
          <div className="signin_button font-weight-bold">
            <button type="button" onClick={handleSubmit}>Sign in</button>
          </div>
          <br />
          <hr />
          <br />
          <div className="signin_button_with_google">
            <button type="button" className="flexing_google">
              <img   src={image12} alt="" /> <p style={{marginBottom: "1px"}}>  Or sign in with Google</p>
            </button>
          </div>

          <div className="last_para">
            <p style={{marginBottom: "0px"}}>Don't have an account?</p>
            <Link to="/signup"> <button type="button">Sign up now</button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

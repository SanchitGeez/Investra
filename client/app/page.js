'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatbotEmbed from './chatBot.jsx';

const page = () => {
  const router = useRouter();
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  });
  const [newUser, setnewUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [loginHeight, setLoginHeight] = useState('100%');
  const [signupHeight, setSignupHeight] = useState('10%');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const handleeyeclick = () => {
    setshowPassword(!showPassword);
  };

  const notify = (message) => toast(message, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const getCookieValue = (name) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null; // Cookie not found
  };

  const handleLoginClick = () => {
    setLoginHeight('100%');
    setSignupHeight('15%');
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setLoginHeight('15%');
    setSignupHeight('100%');
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  const loginUser = async (credentials) => {
    try {
      const res = await axios.post("https://investra-26xe.vercel.app/login", credentials);
      if (res.data.message === 'Login Successful') {
        const userData = JSON.stringify(res.data);
        document.cookie = "jwt=" + res.data.jwt + "; path=/";
        document.cookie = "activeUser=" + userData + "; path=/";
        console.log(getCookieValue('jwt'));
        router.push('/Dash');
      }
    } catch (error) {
      notify(error.response.data);
      console.log(error);
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (validatePassword(newUser.password)) {
      signupUser();
    } else {
      notify("Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.");
    }
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setnewUser({
      ...newUser,
      [name]: value,
    });
  };

  const signupUser = async () => {
    try {

      const res = await axios.post("https://investra-26xe.vercel.app/signup", newUser);
      if (res.data.message === "User added successfully") {
        const userData = JSON.stringify(res.data);
        document.cookie = "jwt=" + res.data.jwt + "; path=/";
        document.cookie = "activeUser=" + userData + "; path=/";
        await loginUser(userData);
      }
    } catch (error) {
      console.error(error);
      notify("Signup failed. Please try again.");
    }
  };

  const showForgetPage = () => {
    router.push('/Forget-Password');
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="bgcontainer">
        {/* Background decorative elements */}
        <div className="bg-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        
        <div className="titlecard">
          <div className="title-content">
            <div className="logo-container">
              <div className="logo-icon">📈</div>
            </div>
            <h1 className="main-title">Investra</h1>
            <div className="title-subtitle">
              <span className="subtitle-text">-- a place to grow --</span>
            </div>
            <div className="feature-highlights">
              <div className="feature-item">
                <span className="feature-icon">💰</span>
                <span>Smart Investing</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Real-time Data</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span>Secure Platform</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="infocard">
          <div className="form-container">
            <div className="form-tabs">
              <button 
                className={`tab-button ${showLoginForm ? 'active' : ''}`}
                onClick={handleLoginClick}
              >
                Login
              </button>
              <button 
                className={`tab-button ${showSignupForm ? 'active' : ''}`}
                onClick={handleSignupClick}
              >
                Sign Up
              </button>
            </div>

            <div className="logincard" style={{ height: loginHeight }} onClick={handleLoginClick}>
              <div className={`form-content ${showLoginForm ? 'visible' : 'hidden'}`}>
                <div className="form-header">
                  <h2 className="form-title">Welcome Back</h2>
                  <p className="form-subtitle">Sign in to your account</p>
                </div>
                <form className="loginform" method='post' onSubmit={handleSubmit}>
                  <div className="input-group">
                    <div className="input-wrapper">
                      <input
                        className='login-text-field'
                        placeholder='Enter your email'
                        type="email"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                      <span className="input-icon">📧</span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-wrapper">
                      <input
                        className='login-text-field'
                        placeholder='Enter your password'
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        onChange={handleChange}
                        required
                      />
                      <span className="input-icon">🔒</span>
                      <span
                        className='eye-icon'
                        onClick={handleeyeclick}
                      >
                        {showPassword ? <EyeNoneIcon /> : <EyeOpenIcon />}
                      </span>
                    </div>
                  </div>
                  <button
                    className='login-button cursor-pointer'
                    type="submit">
                    <span>Sign In</span>
                    <div className="button-shine"></div>
                  </button>
                </form>
                <div className="form-footer">
                  <button 
                    className="forgot-password cursor-pointer" 
                    onClick={showForgetPage}
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>
            </div>
            
            <div className="logincard signupcard" style={{ height: signupHeight }} onClick={handleSignupClick}>
              <div className={`form-content ${showSignupForm ? 'visible' : 'hidden'}`}>
                <div className="form-header">
                  <h2 className="form-title">Create Account</h2>
                  <p className="form-subtitle">Join us and start investing</p>
                </div>
                <form className="signupform" method='post' onSubmit={handleSubmit2}>
                  <div className="input-group">
                    <div className="input-wrapper">
                      <input
                        className='signup-text-field'
                        placeholder='Choose a username'
                        type="text"
                        name="username"
                        onChange={handleChange2}
                        required
                      />
                      <span className="input-icon">👤</span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-wrapper">
                      <input
                        className='signup-text-field'
                        placeholder='Enter your email'
                        type="email"
                        name="email"
                        onChange={handleChange2}
                        required
                      />
                      <span className="input-icon">📧</span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-wrapper">
                      <input
                        className='signup-text-field'
                        placeholder='Create a password'
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        onChange={handleChange2}
                        required
                      />
                      <span className="input-icon">🔒</span>
                      <span
                        className='eye-icon'
                        onClick={handleeyeclick}
                      >
                        {showPassword ? <EyeNoneIcon /> : <EyeOpenIcon />}
                      </span>
                    </div>
                  </div>
                  <button
                    className='signup-button cursor-pointer'
                    type="submit">
                    <span>Create Account</span>
                    <div className="button-shine"></div>
                  </button>
                </form>
                <div className="form-footer">
                  <p className="terms-text">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatbotEmbed />
    </>
  );
};

export default page;

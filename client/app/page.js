'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';

const page = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""  // Added confirmPassword
  });
  const [loginHeight, setLoginHeight] = useState('100%');
  const [signupHeight, setSignupHeight] = useState('10%');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
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
    setSignupHeight('10%');
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setLoginHeight('10%');
    setSignupHeight('100%');
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
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
        router.push('/Dash');
      }
    } catch (error) {
      notify(error.response.data);
      console.log(error);
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    signupUser();
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const signupUser = async () => {
    if (newUser.password !== newUser.confirmPassword) {
      notify("Passwords do not match");
      return;
    }
    
    try {
      const res = await axios.post("https://investra-26xe.vercel.app/signup", newUser);
      if (res.data.message === "User added successfully") {
        const userData = JSON.stringify(res.data);
        document.cookie = "jwt=" + res.data.jwt + "; path=/";
        document.cookie = "activeUser=" + userData + "; path=/";
        await loginUser(newUser); // Update to use newUser for login
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
        <div className="titlecard">
          Investra
          <br />
          <p className='text-11xl'>
            -- a place to grow --
          </p>
        </div>
        <div className="infocard">
          <div className="logincard" style={{ height: loginHeight }} onClick={handleLoginClick}>
            <div style={{ opacity: showLoginForm ? 1 : 0, transition: 'all 0.5s ease' }}>
              Login
              <form className="loginform" method='post' onSubmit={handleSubmit}>
                <input
                  className='login-text-field'
                  placeholder='email'
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  className='login-text-field'
                  placeholder='password'
                  type={showPassword ? 'text' : 'password'} // Toggle visibility
                  name="password"
                  onChange={handleChange}
                />
                <span
                  className='eye-icon'
                  onClick={handleEyeClick}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOpenIcon /> : <EyeNoneIcon />}
                </span>
                <button
                  className='login-button'
                  type="submit">
                  Login
                </button>
              </form>
              <div style={{ fontSize: '20px', marginTop: '10px', cursor: 'pointer' }} onClick={showForgetPage}>
                Forget Password
              </div>
            </div>
          </div>
          <div className="logincard signupcard" style={{ height: signupHeight }} onClick={handleSignupClick}>
            <div style={{ opacity: showSignupForm ? 1 : 0, transition: 'all 0.5s ease', display: showSignupForm ? 'flex' : 'none' }}>
              <form className="signupform" method='post' onSubmit={handleSubmit2}>
                Signup
                <input
                  className='signup-text-field'
                  placeholder='username'
                  type="text"
                  name="username"
                  onChange={handleChange2}
                />
                <input
                  className='signup-text-field'
                  placeholder='email'
                  type="email"
                  name="email"
                  onChange={handleChange2}
                />
                <input
                  className='signup-text-field'
                  placeholder='password'
                  type={showPassword ? 'text' : 'password'} // Toggle visibility
                  name="password"
                  onChange={handleChange2}
                />
                <span
                  className='eye-icon'
                  onClick={handleEyeClick}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOpenIcon /> : <EyeNoneIcon />}
                </span>
                <input
                  className='signup-text-field'
                  placeholder='Confirm password'
                  type="password"
                  name="confirmPassword"  // Use confirmPassword
                  onChange={handleChange2}
                />
                <button
                  className='signup-button'
                  type="submit">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

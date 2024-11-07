
'use client'                       // This ensures that the component runs on the client-side in Next.js.
import React from 'react'          // React is imported to use JSX and state management.
import Link from 'next/link'       // Used for navigation between pages in Next.js.
import Router from 'next/router';   // Used for programmatic routing
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons'   // Icons for the password visibility toggle.

import { useRouter } from 'next/navigation';   // Hook for routing/navigation in Next.js.
import { useState } from 'react';             // Hook to manage state in the component.
import axios from 'axios';                    // For making HTTP requests to the backend API.
import { ToastContainer, toast } from 'react-toastify';       // For displaying notifications/toasts.
import 'react-toastify/dist/ReactToastify.css';           // Importing the required CSS for react-toastify.
import ChatbotEmbed from './chatBot.jsx';

const page = () => {
   // Initialize the useRouter hook from Next.js to manage routing.
  const router = useRouter();
  // State variables for managing login data, new user signup data, and form visibility.
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  });
  const [newUser, setnewUser] = useState({
    username:"",
    email:"",
    password:""
  })
  const [loginHeight, setLoginHeight] = useState('100%');
  const [signupHeight, setSignupHeight] = useState('10%');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const[showPassword,setshowPassword] = useState(false);
   // Function to toggle password visibility.
  const handleeyeclick=()=>{
    setshowPassword(!showPassword);    // Toggle the state of showPassword.
  }
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

  // Helper function to get a specific cookie value by name.
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

  // Function to handle the login form click event.
  const handleLoginClick = () => {
    setLoginHeight('100%');
    setSignupHeight('15%');
    setShowLoginForm(true);
    setShowSignupForm(false);
  };
// Function to handle the signup form click event.
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
  loginUser(loginData); // Call loginUser with loginData
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setloginData({
    ...loginData,
    [name]: value, // Update loginData when input changes
  });
};

const loginUser = async (credentials) => {
  try {
    const res = await axios.post("https://investra-26xe.vercel.app/login", credentials);
    if (res.data.message === 'Login Successful') {
      const userData = JSON.stringify(res.data);
      document.cookie = "jwt=" + res.data.jwt + "; path=/"; // Set JWT in cookies
      document.cookie = "activeUser=" + userData + "; path=/"; // Set activeUser in cookies
      router.push('/Dash'); // Redirect to dashboard
    }
  } catch (error) {
    notify(error.response.data); // Notify error message
    console.log(error);
  }
};

const handleSubmit2 = (e) => {
  e.preventDefault();
  if (validatePassword(newUser.password)) {
    signupUser(); // Call signupUser if password is valid
  } else {
    notify("Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.");
  }
};

const handleChange2 = (e) => {
  const { name, value } = e.target;
  setnewUser({
    ...newUser,
    [name]: value, // Update newUser when input changes
  });
};

const signupUser = async () => {
  try {
    const res = await axios.post("https://investra-26xe.vercel.app/signup", newUser);
    if (res.data.message === "User added successfully") {
      const userData = JSON.stringify(res.data);
      document.cookie = "jwt=" + res.data.jwt + "; path=/"; // Set JWT in cookies
      document.cookie = "activeUser=" + userData + "; path=/"; // Set activeUser in cookies
      await loginUser(newUser); // Login user immediately after signup
    }
  } catch (error) {
    console.error(error);
    notify("Signup failed. Please try again.");
  }
};

const showForgetPage = () => {
  router.push('/Forget-Password'); // Navigate to forget password page
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
        <p className="text-11xl">-- a place to grow --</p>
      </div>
      <div className="infocard">
        {/* Login card */}
        <div className="logincard" style={{ height: loginHeight }} onClick={handleLoginClick}>
          <div style={{ opacity: showLoginForm ? 1 : 0, transition: 'all 0.5s ease' }}>
            Login
            <form className="loginform" method="post" onSubmit={handleSubmit}>
              <input
                className="login-text-field"
                placeholder="email"
                type="email"
                name="email"
                onChange={handleChange} // Update loginData when email changes
              />
              <input
                className="login-text-field"
                placeholder="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={handleChange} // Update loginData when password changes
              />
              <span
                className="eye-icon"
                onClick={handleeyeclick}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? <EyeNoneIcon /> : <EyeOpenIcon />}
              </span>
              <button className="login-button cursor-pointer" type="submit">
                Login
              </button>
            </form>
            <div style={{ fontSize: '20px', marginTop: '10px' }} className="cursor-pointer" onClick={showForgetPage}>
              Forget Password
            </div>
          </div>
        </div>

        {/* Signup card */}
        <div className="logincard signupcard" style={{ height: signupHeight }} onClick={handleSignupClick}>
          <div
            style={{
              opacity: showSignupForm ? 1 : 0,
              transition: 'all 0.5s ease',
              display: showSignupForm ? 'flex' : 'none',
            }}
          >
            <form className="signupform" method="post" onSubmit={handleSubmit2}>
              Signup
              <input
                className="signup-text-field"
                placeholder="username"
                type="text"
                name="username"
                onChange={handleChange2} // Update newUser when username changes
              />
              <input
                className="signup-text-field"
                placeholder="email"
                type="email"
                name="email"
                onChange={handleChange2} // Update newUser when email changes
              />
              <input
                className="signup-text-field"
                placeholder="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={handleChange2} // Update newUser when password changes
              />
              <span
                className="eye-icon"
                onClick={handleeyeclick}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? <EyeNoneIcon /> : <EyeOpenIcon />}
              </span>
              <button className="signup-button cursor-pointer" type="submit">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  <ChatbotEmbed />
  </>
);

export default page   // Export the component as the default export of the module.

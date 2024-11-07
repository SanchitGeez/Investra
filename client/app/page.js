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

const page = () => {
   // Initialize the useRouter hook from Next.js to manage routing.
  const router = useRouter();
  // State variables for managing login data, new user signup data, and form visibility.
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  })
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
    // transition: Bounce,
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
    setSignupHeight('10%');
    setShowLoginForm(true);
    setShowSignupForm(false);
  };
// Function to handle the signup form click event.
  const handleSignupClick = () => {
    setLoginHeight('10%');
    setSignupHeight('100%');
    setShowLoginForm(false);
    setShowSignupForm(true);


  };
    
   // Form submission handler for login (prevents default and calls loginUser function).
  const handleSubmit = (e) => {
        e.preventDefault();
        loginUser();            // Call the loginUser function to attempt login.
  }
  // Update login data state on input change.
  const handleChange = (e) => {
        const { name, value } = e.target;
        setloginData({
            ...loginData,
            [name]: value,    // Update the login data with the new input values.
          });
  }
  // Function to send login request to the backend API.
  const loginUser = async () => {
      try {
        // Send the login data to the backend using Axios.
        const res = await axios.post("https://investra-26xe.vercel.app/login", loginData);
//        const res = await axios.post("http://localhost:4000/login", loginData);

        if (res.data.message === 'Login Successful') {
          const userData = JSON.stringify(res.data)
          //sessionStorage.setItem('jwt', res.data.jwt);
          //sessionStorage.setItem('activeUser',userData)
          document.cookie = "jwt="+res.data.jwt+"; path=/";            // Set JWT and user data cookies for authentication.
          document.cookie = "activeUser="+userData+"; path=/";
          const cookies = document.cookie.split(';').map(cookie => cookie.trim());
          console.log(getCookieValue('jwt'));
          router.push('/Dash');      // Redirect to dashboard if login is successful.
        }
      } catch (error) {
        notify(error.response.data)     // Show error message in case of failure.
        console.log(error);
      }
  }
// Form submission handler for signup (prevents default and calls signupUser function).
  const handleSubmit2 = (e) => {
      e.preventDefault();
      signupUser();              // Call the signupUser function to attempt signup.
  }
   // Update signup data state on input change.
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setnewUser({
      ...newUser,
      [name]: value,           // Update the signup data with the new input values.
    });
  }
    // Function to send signup request to the backend API.
  const signupUser = async() => {
    try {
        const res = await axios.post("https://investra-26xe.vercel.app/signup",newUser)  // Send the signup data to the backend using Axios.
        notify(res.data);             // Show success message on successful signup.
    } catch (error) {
        console.error(error);   // show errors.
    }
  }
 // Function to navigate to the Forget-Password page.
  const showForgetPage=() =>
  {
    //e.preventDefault();
    router.push('/Forget-Password');        // Navigate to the Forget-Password page.
  }

  return (
    <>
      {/* ToastContainer for displaying toast notifications */}
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
          <br></br>
          <p className='text-11xl'>
             -- a place to grow --
          </p>
        </div>
        <div className="infocard">
          {/* Login card */}
          <div className="logincard" style={{ height: loginHeight}} onClick={handleLoginClick}>
              <div style={{opacity: showLoginForm ? 1 : 0, transition: 'all 0.5s ease'}}>
              Login
                <form className="loginform"  method='post' onSubmit={handleSubmit}>
                  <input
                    className='login-text-field'
                    placeholder='email'
                    type="email"
                    name="email"
                    onChange={handleChange}     // Update loginData when email changes
                  />
                  <input
                    className='login-text-field'
                    placeholder='password'
                    type="password"
                    name="password"
                    onChange={handleChange}    // Update loginData when password changes
                  />
                  {/* Password visibility toggle */}
                  <span
                  className='eye-icon'
                  onClick={handleeyeclick}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                  >
                    {showPassword ? <EyeNoneIcon /> : <EyeOpenIcon />}
                  </span>
                  <button
                    className='login-button'
                    type="submit">
                    Login
                  </button>
                </form>
                {/* Link to Forget Password page */}
                <div style={{fontSize:'20px',marginTop:'10px'}} onClick={showForgetPage}>Forget Password</div>
              </div>
          </div>
          {/* Signup card */}
          <div className="logincard signupcard" style={{ height: signupHeight}} onClick={handleSignupClick}>
            <div style={{opacity: showSignupForm ? 1 : 0, transition: 'all 0.5s ease',display:showSignupForm?'flex':'none'}}>
                <form className="signupform"  method='post' onSubmit={handleSubmit2}>
                Signup
                <input
                    className='signup-text-field'
                    placeholder='username'
                    type="text"
                    name="username"
                    onChange={handleChange2}   // Update newUser when username changes
                  />
                  <input
                    className='signup-text-field'
                    placeholder='email'
                    type="email"
                    name="email"
                    onChange={handleChange2}    // Update newUser when email changes
                  />
                  <input
                    className='signup-text-field'
                    placeholder='password'
                    type="password"
                    name="password"
                    onChange={handleChange2}   // Update newUser when password changes
                  />
                  {/* Password visibility toggle */}
                  <span
                  className='eye-icon'
                  onClick={handleeyeclick}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                  >
                    {showPassword ? <EyeNoneIcon /> : <EyeOpenIcon />}
                  </span>
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


export default page   // Export the component as the default export of the module.
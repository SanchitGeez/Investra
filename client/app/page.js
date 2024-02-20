'use client'
import React from 'react'
import Link from 'next/link'
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const router = useRouter();
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
        loginUser();
  }
  const handleChange = (e) => {
        const { name, value } = e.target;
        setloginData({
            ...loginData,
            [name]: value,
          });
  }
  const loginUser = async () => {
      try {
        const res = await axios.post("http://investra-backend-env.eba-zgwzgvmn.ap-south-1.elasticbeanstalk.com/login", loginData);

        if (res.data.message === 'Login Successful') {
          const userData = JSON.stringify(res.data)
          sessionStorage.setItem('jwt', res.data.jwt);
          sessionStorage.setItem('activeUser',userData)
          router.push('/Dash');
        }
      } catch (error) {
        notify(error.response.data)
        console.log(error);
      }
  }

  const handleSubmit2 = (e) => {
      e.preventDefault();
      signupUser();
  }
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setnewUser({
      ...newUser,
      [name]: value,
    });
  }
  const signupUser = async() => {
    try {
        const res = await axios.post("http://investra-backend-env.eba-zgwzgvmn.ap-south-1.elasticbeanstalk.com/signup",newUser)
        notify(res.data);
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <>
      {/* Your existing JSX */}
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
          <div className="logincard" style={{ height: loginHeight}} onClick={handleLoginClick}>
              <div style={{opacity: showLoginForm ? 1 : 0, transition: 'all 0.5s ease'}}>
              Login
                <form className="loginform"  method='post' onSubmit={handleSubmit}>
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
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                  <button
                    className='login-button'
                    type="submit">
                    Login
                  </button>
                </form>
              </div>
          </div>
          <div className="logincard signupcard" style={{ height: signupHeight}} onClick={handleSignupClick}>
            <div style={{opacity: showSignupForm ? 1 : 0, transition: 'all 0.5s ease',display:showSignupForm?'flex':'none'}}>
                <form className="signupform"  method='post' onSubmit={handleSubmit2}>
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
                    type="password"
                    name="password"
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


export default page
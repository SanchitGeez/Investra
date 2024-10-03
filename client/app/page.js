'use client'
import React from 'react'
import Link from 'next/link'
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../app/Te.css'
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
  const [isLogin,setIsLogin]=useState(true)
  const [loginHeight, setLoginHeight] = useState('100%');
  const [signupHeight, setSignupHeight] = useState('10%');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const[showPassword,setshowPassword] = useState(false);
  const handleeyeclick=()=>{
    setshowPassword(!showPassword);
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
        const res = await axios.post("https://investra-26xe.vercel.app/login", loginData);
//        const res = await axios.post("http://localhost:4000/login", loginData);

        if (res.data.message === 'Login Successful') {
          const userData = JSON.stringify(res.data)
          //sessionStorage.setItem('jwt', res.data.jwt);
          //sessionStorage.setItem('activeUser',userData)
          document.cookie = "jwt="+res.data.jwt+"; path=/";
          document.cookie = "activeUser="+userData+"; path=/";
          const cookies = document.cookie.split(';').map(cookie => cookie.trim());
          console.log(getCookieValue('jwt'));
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
        const res = await axios.post("https://investra-26xe.vercel.app/signup",newUser)
        notify(res.data);
    } catch (error) {
        console.error(error);
    }
  }

  const showForgetPage=() =>
  {
    //e.preventDefault();
    router.push('/Forget-Password');
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
          {/* <div className="logincard" style={{ height: loginHeight}} onClick={handleLoginClick}>
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
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <button
                    className='login-button'
                    type="submit">
                    Login
                  </button>
                </form>
                <div style={{fontSize:'20px',marginTop:'10px'}} onClick={showForgetPage}>Forget Password</div>
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
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <button
                    className='signup-button'
                    type="submit">
                    Signup
                  </button>
                </form>
              </div>
          </div> */}
           <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' :''} onClick={()=>setIsLogin(true)}>Login</button>
                <button className={!isLogin ? 'active':''} onClick={()=>setIsLogin(false)}>SignUp</button>


            </div>
            {isLogin ? <>
            <div className="form">
                <h2>Login form</h2>
                <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                <input type="password" placeholder="Password"  onChange={handleChange} name="password" />
                <a href="#">Forgot Password</a>
                <button type='submit' onClick={handleSubmit}>Login</button>
                <p>Not a Member ? <a href="#" onClick={()=>setIsLogin(false)}>SignUp</a></p>
            </div>
            
            </>:<>
            <div className="form">
                <h2>SignUp form</h2>
                <input type="test" name="username" placeholder="Username" onChange={handleChange2} />
                <input type="email" name="email" onChange={handleChange2} placeholder="Email" />
                <input type="password" onChange={handleChange2} placeholder="Password" />
                <button type='submit' onClick={handleSubmit2}>SignUp</button>
                <p>Already have an account ? <a href="#" onClick={()=>setIsLogin(true)}>SignUp</a></p>
            </div>
            </>

            }

        </div>
        
    </div>
        </div>
      </div>
    </>
  );
};


export default page
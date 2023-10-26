"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const Login = () => {
    const router = useRouter();
    const storage = window.sessionStorage;
    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    })
    
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
          const res = await axios.post("http://localhost:4000/login", loginData);
          console.log(res.data.message);
          if (res.data.message === 'Login Successful') {
            console.log(res.data);
            sessionStorage.setItem('loggedInUser', JSON.stringify(res.data));
            router.push('/Home');
          }
        } catch (error) {
          console.error(error);
        }
      }

  return (  
    <>
    <div className="signup-form flex-col">
        <h1 className='font-bold text-6xl m-5 p-5'>Signup</h1>
        <form method='post' onSubmit={handleSubmit}>
            <input 
                className="placeholder-white bg-orange-400 m-5 p-5" 
                placeholder="email" 
                type="email" 
                name="email"
                value={loginData.email}
                onChange={handleChange}
            />
            <input 
                className="placeholder-white bg-orange-400 m-5 p-5" 
                placeholder="password" 
                type="password" 
                name="password"
                value={loginData.password}
                onChange={handleChange}
            />
            <button 
                className='bg-slate-50 text-orange-400 m-5 p-5 rounded-xl border-red-600 border' 
                type="submit">
                Login
            </button>

        </form>
    </div>
    </>
  )
}
export default Login
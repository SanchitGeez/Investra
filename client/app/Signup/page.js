"use client"
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
const signup = () => {

    const [newUser, setnewUser] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser();
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewUser({
          ...newUser,
          [name]: value,
        });
    }


    const signupUser = async() => {
        try {
            const res = await axios.post("http://localhost:4000/signup",newUser)
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
                placeholder='username' 
                type="text" 
                name="username"
                value={newUser.username} 
                onChange={handleChange}
            />

            <input 
                className="placeholder-white bg-orange-400 m-5 p-5" 
                placeholder="email" 
                type="email" 
                name="email"
                value={newUser.email} 
                onChange={handleChange}

            />

            <input 
                className="placeholder-white bg-orange-400 m-5 p-5" 
                placeholder="password" 
                type="password" 
                name="password"
                value={newUser.password}
                onChange={handleChange}

            />

            <button 
                className='bg-slate-50 text-orange-400 m-5 p-5 rounded-xl border-red-600 border' 
                type="submit">
                Sign up
            </button>

        </form>
    </div>
    </>
  )
}

export default signup
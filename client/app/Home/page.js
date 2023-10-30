"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Home = () => {

    const [username, setUsername] = useState("");

    useEffect(() =>{
      const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
      setUsername(loggedInUser?.username);
    })
  return (
    <>
        <div className='m-5'>home {username}</div>
        <Link className='m-5' href={'/Signup'}>Signup</Link>
        <Link className='m-5' href={'/Login'}>Login</Link>
    </>
  )
}

export default Home
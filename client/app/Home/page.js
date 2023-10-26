"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Home = () => {

    const [username, setUsername] = useState("");

  return (
    <>
        <div>home {username}</div>
        <Link href={'/Signup'}>Signup</Link>
        <Link href={'/Login'}>Login</Link>
    </>
  )
}

export default Home
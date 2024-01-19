import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const router = useRouter();
  useEffect(() => {
    // Check if JWT token is present in sessionStorage
    const jwtToken = sessionStorage.getItem('jwt');
    setIsLoggedIn(!!jwtToken); // Update state based on the presence of the token
  }, []);

  const handleClick = () => {
    // Call the function passed from the parent component
    props.onButtonClick();
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={'/'} className="text-white text-lg font-semibold">
            Investra
          </Link>
          <div>
            {isLoggedIn ? (
              <>
              <p>Hi {props.username}</p>
              <p className='text-white mr-4' onClick={handleClick}>Logout</p>
              </>
            ) : (
              <>
                <Link className='text-white mr-4' href={'/Signup'}>Signup</Link>
                <Link className='text-white mr-4' href={'/Login'}>Login</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar
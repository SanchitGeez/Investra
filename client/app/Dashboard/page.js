'use client'
import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import './styles.css'
import StockCard from '@/components/StockCard';

const Dashboard = () => {
  // storage = window.sessionStorage;
  const router = useRouter();
  const {username} = JSON.parse(sessionStorage.getItem('activeUser'))
  const [UserStocks, setUserStocks] = useState([]);
  const getStocks = async () => {
    try {
      const jwt = sessionStorage.getItem('jwt');

      if(jwt!=0){
         axios.defaults.headers.common['token'] = `${jwt}`;
      }

      const res = await axios.post("http://localhost:4000/stocks/get",{ withCredentials: true });
      setUserStocks(res.data)

    } catch (error) {
      console.error(error);
    }
  };

  // const getStocks = async () => {
  //   try {
  //     const jwt = sessionStorage.getItem('jwt');
  
  //     if (jwt) {
  //       const res = await axios.post("http://localhost:4000/stocks/get", {}, {
  //         withCredentials: true,
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${jwt}`,
  //         },
  //       });
  
  //       setUserStocks(res.data);
  //     } else {
  //       router.push('/')
  //     }
  
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getStocks();
  }, []); 


  const handleLogout = (e) => {
    //e.preventDefault();
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('activeUser')
    router.push('/')
}

  return <>
  <div className="bgcontainer-d">
    <div className="top-half">
        <div className="titlecard-d"  onClick={handleLogout}>
          {username}
          <br></br>
          <p className='text-11xl'>
             -- a place to grow --
          </p>
        </div>
        <div className="infocard">
          <p className='text-white'>graph area</p>
        </div>
    </div>
    <div className="bottom-half">
    {UserStocks.map((stock) => {
      console.log(stock)
      return(<StockCard 
        ticker={stock.ticker}
        avg={stock.price}
        qty={stock.quantity}  
        />)
    })}
    </div>
  </div>

  {/* <Navbar 
    username={username}
    onButtonClick={handleLogout}
    />
    <p className='text-11xl'>
      Dashboard
    </p> */}

  </>;
};

export default Dashboard
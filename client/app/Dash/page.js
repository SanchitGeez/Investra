'use client'
import React from 'react'
import axios from 'axios'
import './styles.css'
import StockCard from '@/components/StockCard'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import * as ScrollArea from '@radix-ui/react-scroll-area';


const Dash = () => {
    const router = useRouter();
    const [Username, setUsername] = useState('')
    const [UserStocks, setUserStocks] = useState([]);
    const [Invested, setInvested] = useState(0);
    const [PurchaseData, setPurchaseData] = useState({
        ticker:'',
        qty:''
    })
    let stockTickersURL = "";
    const {username,balance} = JSON.parse(sessionStorage.getItem('activeUser'))
    useEffect(() => {
        getStocks();
        setUsername(username.toUpperCase());

      }, []);
    useEffect(() => {
        //console.log(UserStocks);
        if (UserStocks.length != 0) {
            calculateBasicInfo();
        }
      }, [UserStocks]);
    // useEffect(() => {
    //     getStocks();
    //   }, [UserStocks]);
    
    const handlePurchaseChange = (e) =>{
        const { name, value } = e.target;
        setPurchaseData({
            ...PurchaseData,
            [name]: value,
          });
    }
    const handlePurchase = async() => {
        try {
            const jwt = sessionStorage.getItem('jwt');
            if(jwt!=0){
                axios.defaults.headers.common['token'] = `${jwt}`;
            }
            const res = await axios.post('http://localhost:4000/stocks/purchase',PurchaseData);
            await getStocks();
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getStocks = async () => {
        try {
          const jwt = sessionStorage.getItem('jwt');
          if(jwt!=0){
             axios.defaults.headers.common['token'] = `${jwt}`;
          }
          const res = await axios.post("http://localhost:4000/stocks/get",{});
          console.log(res);
          setUserStocks(res.data);
        } catch (error) {
          console.error(error);
        }
    };
    const handleLogout = (e) => {
        //e.preventDefault();
        sessionStorage.removeItem('jwt');
        sessionStorage.removeItem('activeUser')
        router.push('/');
    }
    const calculateBasicInfo = async () => {
        let totalInvested = 0;

        for (let i = 0; i < UserStocks.length; i++) {

            //generate url and get latest price
            stockTickersURL += String(UserStocks[i].ticker);
            stockTickersURL += '.XNSE,'


            //calculate total invested money  
            const amt = UserStocks[i].price * UserStocks[i].quantity;
            totalInvested += amt;
        }
        console.log(stockTickersURL);
        const roundedInvested = Math.ceil(totalInvested * 100.00) / 100.00;
      
        setInvested(roundedInvested);
    };

  return (
    <>
        <div className="container">
            <div className="topbar">
                <p className='text-sky-400 text-17xl font-extrabold'>Hey, {Username}</p>
                <div className="top-buttons">
                    <button className='balance-button text-black letter-space'>+ BALANCE</button>
                    <button className='logout-button letter-space ' onClick={handleLogout}>LOGOUT</button>
                </div>
            </div>
            <div className="content">
                <div className="left-side">
                    <div className="overall-stats">
                        <div className="holdings">
                            <div className="holdings-lhs">
                                <p className='font-extrabold text-11xl text-white letter-space'>{Invested}</p>
                                <p className='text-sky-800 my-2'>invested</p>
                            </div>
                            <div className="holdings-rhs">
                                <p className='font-extrabold text-11xl text-white letter-space'>34533.42</p>
                                <p className='text-sky-800 my-2'>current</p>
                            </div>
                        </div>
                        <div className="pl">
                            <p className='mx-8 font-semibold'>+4322.12</p>
                            <p className='text-21xl mx-0 my-0 py-0'>|</p>
                            <p className='mx-8 bg-lime-600 px-4 rounded-2xl font-semibold'>12.31%</p>
                        </div>
                    </div>
                    <div className="balance-buy">
                        <div className="balance">
                            <p className='font-extrabold text-5xl'>balance</p>
                            <p className='balance-amt'>{balance}</p>
                            <hr />
                        </div>
                        <div className="buy-stocks">
                            <p className='text-21xl font-extrabold'>BUY</p>
                            <form className='buy-stocks-form' method='post'>
                                <input 
                                    className='buy-input-field' 
                                    type="text" 
                                    placeholder='name' 
                                    name='ticker'
                                    onChange={handlePurchaseChange}
                                />
                                <input 
                                    className='mb-20 buy-input-field ' 
                                    type="number" 
                                    placeholder='qty' 
                                    name='quantity'
                                    onChange={handlePurchaseChange}
                                    />
                            </form>
                            <button className='buy-confirm' onClick={handlePurchase}>CONFIRM</button>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                {UserStocks.map((stock) => {
                    //console.log(stock)
                    return(<StockCard 
                        key={stock._id}
                        ticker={stock.ticker}
                        inv={ Math.ceil(stock.price * stock.quantity *100.00) / 100.00}
                        qty={stock.quantity}
                        avg={ Math.ceil(stock.price * 100.00) / 100.00} 
                        ltp={stock.ltp} 
                        net={Math.ceil(stock.ltp * stock.quantity *100.00) / 100.00}
                        pl={parseFloat(((stock.ltp * stock.quantity) - (stock.price * stock.quantity)).toFixed(2))}
                    />)
                })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Dash
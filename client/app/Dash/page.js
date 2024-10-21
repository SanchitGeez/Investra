'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import StockCard from '@/components/StockCard';
import { useRouter } from 'next/navigation';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Popover from '@radix-ui/react-popover';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const availableStocks = ['Reliance', 'Tata', 'Infosys', 'HDFC', 'Wipro']; // Full list of stocks here

const Dash = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [userStocks, setUserStocks] = useState([]);
    const [invested, setInvested] = useState(0);
    const [currentTotal, setCurrentTotal] = useState(0);
    const [balanceAmount, setBalanceAmount] = useState(0);
    const [purchaseData, setPurchaseData] = useState({ ticker: '', quantity: '' });
    const [userBalance, setUserBalance] = useState(0);
    const [filteredStocks, setFilteredStocks] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    // Helper functions to manage cookies
    const getCookieValue = (name) => {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) return cookieValue;
        }
        return null;
    };

    const notify = (message) => toast(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "dark",
    });

    useEffect(() => {
        const user = JSON.parse(getCookieValue('activeUser')) || {};
        setUsername(user.username?.toUpperCase() || 'GUEST');
        setUserBalance(user.balance || 0);
        getStocks();
        getBalance();
    }, []);

    useEffect(() => {
        calculateCurrentTotal();
    }, [userStocks]);

    const calculateCurrentTotal = () => {
        const total = userStocks.reduce((acc, stock) => acc + (stock.ltp * stock.quantity), 0);
        setCurrentTotal(total);
    };

    const handleStockSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setPurchaseData({ ...purchaseData, ticker: e.target.value });

        if (query) {
            const filtered = availableStocks.filter(stock => stock.toLowerCase().includes(query));
            setFilteredStocks(filtered);
            setShowDropdown(true);
        } else {
            setFilteredStocks([]);
            setShowDropdown(false);
        }
    };

    const handleStockSelect = (stock) => {
        setPurchaseData({ ...purchaseData, ticker: stock });
        setShowDropdown(false);
    };

    const handleBalanceChange = (e) => {
        setBalanceAmount(e.target.value);
    };

    const handleBalanceAdd = async () => {
        try {
            const jwt = getCookieValue('jwt');
            if (jwt) axios.defaults.headers.common['token'] = `${jwt}`;
    
            await axios.post('https://investra-26xe.vercel.app/addBalance', { balance: balanceAmount });
            notify("Balance added!!");
            setBalanceAmount('');
            getBalance();  // Make sure to call this after balance is added
        } catch (error) {
            notify("Error adding balance");
        }
    };
    

    const handlePurchaseChange = (e) => {
        const { name, value } = e.target;
        setPurchaseData({ ...purchaseData, [name]: value });
    };

    const handlePurchase = async (e) => {
        e.preventDefault();
        try {
            const jwt = getCookieValue('jwt');
            if (jwt) axios.defaults.headers.common['token'] = `${jwt}`;

            const res = await axios.post('https://investra-26xe.vercel.app/stocks/purchase', purchaseData);
            notify(res.data);
            if (res.data === "Purchase successful") {
                getBalance();
                getStocks();
            }
        } catch (error) {
            notify("Error during purchase");
        }
    };

    const getBalance = async () => {
        try {
            const jwt = getCookieValue('jwt');
            const activeUser = JSON.parse(getCookieValue('activeUser')) || {}; // Add this line to extract userId
            const userId = activeUser.userId; // Extract userId from activeUser cookie
            
            if (jwt) axios.defaults.headers.common['token'] = `${jwt}`;
    
            const res = await axios.post('https://investra-26xe.vercel.app/getBalance', { userId: userId });
            setUserBalance(res.data.balance);
        } catch (error) {
            console.error("Error fetching balance", error);
        }
    };
    

    const getStocks = async () => {
        try {
            const jwt = getCookieValue('jwt');
            if (jwt) axios.defaults.headers.common['token'] = `${jwt}`;

            const res = await axios.post("https://investra-26xe.vercel.app/stocks/get", {});
            setUserStocks(res.data);
        } catch (error) {
            console.error("Error fetching stocks", error);
        }
    };

    const handleLogout = () => {
        document.cookie = "jwt=null; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        document.cookie = "activeUser=null; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        router.push('/');
    };

    return (
        <>
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} theme="dark" />
            <div className="container">
                <div className="topbar">
                    <p className="text-17xl font-extrabold" style={{ color: "#fea240" }}>Hey, {username}</p>
                    <div className="top-buttons">
                        <button className="refresh-button" title="Update stock prices" onClick={getStocks}>Update</button>
                        <Popover.Root>
                            <Popover.Trigger asChild>
                                <button className="balance-button text-black">+ BALANCE</button>
                            </Popover.Trigger>
                            <Popover.Portal>
                                <Popover.Content className="PopoverContent" sideOffset={5}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                        <p style={{color:'white'}}>Enter Amount</p>
                                        <input className="Input" value={balanceAmount} onChange={handleBalanceChange} />
                                        <button style={{color:'white',height:'38px',width:'130px',border:'1px solid white',borderRadius:'10px',textAlign:'center'}} onClick={handleBalanceAdd}>ADD</button>
                                    </div>
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>
                        <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
                    </div>
                </div>

                <div className="content">
                    <div className="left-side">
                        <div className="overall-stats">
                            <div className="holdings">
                                <div className="holdings-lhs">
                                    <p className="font-extrabold text-11xl text-white">{invested.toFixed(2)}</p>
                                    <p className="text-white">invested</p>
                                </div>
                                <div className="holdings-rhs">
                                    <p className="font-extrabold text-11xl text-white">{currentTotal.toFixed(2)}</p>
                                    <p className="text-white">current</p>
                                </div>
                            </div>
                            <div className="pl">
                                <p className="mx-8 font-semibold">{(currentTotal - invested).toFixed(2)}</p>
                                <p className="mx-8 px-4 rounded-2xl font-semibold">
                                    {invested !== 0 ? ((currentTotal - invested) * 100 / invested).toFixed(2) : "--"}%
                                </p>
                            </div>
                        </div>

                        <div className="balance-buy">
                            <div className="balance">
                                <p className="font-extrabold text-5xl">balance</p>
                                <p className="balance-amt">{userBalance.toFixed(2)}</p>
                            </div>
                            <div className="buy-stocks">
                                <p className="text-21xl font-extrabold">BUY</p>
                                <form className="buy-stocks-form" onSubmit={handlePurchase}>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="ticker"
                                        value={purchaseData.ticker}
                                        onChange={handleStockSearch}
                                    />
                                    {showDropdown && (
                                        <ScrollArea.Root>
                                            <ScrollArea.Viewport>
                                                <div className="dropdown">
                                                    {filteredStocks.map(stock => (
                                                        <p key={stock} className="dropdown-item" onClick={() => handleStockSelect(stock)}>
                                                            {stock}
                                                        </p>
                                                    ))}
                                                </div>
                                            </ScrollArea.Viewport>
                                        </ScrollArea.Root>
                                    )}
                                    <input
                                        type="number"
                                        placeholder="quantity"
                                        name="quantity"
                                        value={purchaseData.quantity}
                                        onChange={handlePurchaseChange}
                                    />
                                    <button type="submit">GO</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="right-side">
                        <p className="text-21xl font-extrabold">STOCKS</p>
                        <ScrollArea.Root>
                            <ScrollArea.Viewport>
                                <div className="stocks">
                                    {userStocks.length === 0 ? <p>Loading...</p> : userStocks.map(stock => (
                                        <StockCard key={stock.ticker} stock={stock} />
                                    ))}
                                </div>
                            </ScrollArea.Viewport>
                        </ScrollArea.Root>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dash;

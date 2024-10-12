'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import StockCard from '@/components/StockCard';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useCookie = (name) => {
    const [cookieValue, setCookieValue] = useState(null);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const cookies = document.cookie.split(';').map(cookie => cookie.trim());
            const cookie = cookies.find(cookie => cookie.startsWith(name));
            if (cookie) {
                const [, value] = cookie.split('=');
                setCookieValue(value);
            }
        }
    }, [name]);

    const removeCookie = () => {
        if (typeof document !== 'undefined') {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
            setCookieValue(null);
        }
    };

    return [cookieValue, removeCookie];
};

const Dash = () => {
    const router = useRouter();
    
    const [Username, setUsername] = useState('');
    const [UserStocks, setUserStocks] = useState([]);
    const [Invested, setInvested] = useState(0);
    const [Current, setCurrent] = useState(0);
    const [BalanceAmount, setBalanceAmount] = useState(0);
    const [PurchaseData, setPurchaseData] = useState({ ticker: '', qty: '' });
    const [UserBalance, setUserBalance] = useState(0);
    
    const [activeUserCookie, removeActiveUserCookie] = useCookie('activeUser');
    const [jwtCookie, removeJwtCookie] = useCookie('jwt');

    const notify = (message) => toast(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    useEffect(() => {
        const { username, balance, userId } = JSON.parse(activeUserCookie) || { username: "error", balance: "error", userId: "error" };
        setUsername(username.toUpperCase());
        setUserBalance(balance);
        getStocks();
        getBalance();
    }, [activeUserCookie]);

    useEffect(() => {
        getCurrent();
        if (UserStocks.length !== 0) {
            calculateBasicInfo();
        }
    }, [UserStocks]);

    const getCurrent = () => {
        const currentTotal = UserStocks.reduce((total, stock) => total + (stock.ltp * stock.quantity), 0);
        setCurrent(currentTotal);
    };

    const getBalance = async () => {
        if (jwtCookie) {
            axios.defaults.headers.common['token'] = jwtCookie;
        }
        const req = { userId: activeUserCookie?.userId };
        const res = await axios.post('https://investra-26xe.vercel.app/getBalance', req);
        setUserBalance(res.data.balance);
    };

    const handleBalanceChange = (e) => {
        const { value } = e.target;
        setBalanceAmount(value);
    };

    const handleBalanceAdd = async () => {
        if (jwtCookie) {
            axios.defaults.headers.common['token'] = jwtCookie;
        }
        const req = { balance: BalanceAmount };
        await axios.post('https://investra-26xe.vercel.app/addBalance', req);
        notify("Balance added!!");
        getBalance();
    };

    const handlePurchaseChange = (e) => {
        const { name, value } = e.target;
        setPurchaseData({
            ...PurchaseData,
            [name]: value,
        });
    };

    const handlePurchase = async () => {
        try {
            if (jwtCookie) {
                axios.defaults.headers.common['token'] = jwtCookie;
            }
            const res = await axios.post('https://investra-26xe.vercel.app/stocks/purchase', PurchaseData);
            notify(res.data);
            if (res.data === "Purchase successful") {
                await getBalance();
                await getStocks();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateStocks = async () => {
        try {
            if (jwtCookie) {
                axios.defaults.headers.common['token'] = jwtCookie;
            }
            const res = await axios.post("https://investra-26xe.vercel.app/stocks/update", {});
            notify(res.data);
            getStocks();
        } catch (error) {
            console.error(error);
        }
    };

    const getStocks = async () => {
        try {
            if (jwtCookie) {
                axios.defaults.headers.common['token'] = jwtCookie;
            }
            const res = await axios.post("https://investra-26xe.vercel.app/stocks/get", {});
            await setUserStocks(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        removeJwtCookie();
        removeActiveUserCookie();
        router.push('/');
    };

    const calculateBasicInfo = async () => {
        let totalInvested = 0;

        for (let stock of UserStocks) {
            const amt = stock.price * stock.quantity;
            totalInvested += amt;
        }
        const roundedInvested = Math.ceil(totalInvested * 100.00) / 100.00;
        setInvested(roundedInvested);
    };

    return (
        <>  
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
            <div className="container">
                <div className="topbar">
                    <p className='text-17xl font-extrabold' style={{ color: "#fea240" }}>Hey, {Username}</p>
                    <div className="top-buttons">
                        <button className='refresh-button letter-space cursor-pointer' title="WARNING !! This updates the price to yesterday's close price. So use it once a day only." onClick={updateStocks}>
                            {/* Your SVG or Icon here */}
                        </button>
                        <button className='logout-button' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                {/* Rest of your component */}
            </div>
        </>
    );
};

export default Dash;

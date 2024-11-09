
'use client'   // This directive tells Next.js that this file is a client-side component
// Importing necessary libraries and components
import React from 'react'   // React library for building user interfaces
import axios from 'axios'   // Axios for making HTTP requests (usually for APIs)
import './styles.css'      // Importing the css styles
import StockCard from '@/components/StockCard'  // Importing a custom component for displaying stock cards
import { useState,useEffect } from 'react'      // React hooks for managing state and side-effects
import { useRouter } from 'next/navigation'     // Importing Next.js routing functionality for navigating between pages
import * as ScrollArea from '@radix-ui/react-scroll-area'; // Radix UI's ScrollArea for custom scroll behavior

import * as Popover from '@radix-ui/react-popover';   // Radix UI's Popover for interactive popups
import * as Toast from '@radix-ui/react-toast';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';   // Radix UI icons used in the UI
import { ToastContainer, toast } from 'react-toastify';                    // react-toastify for toast notifications
import 'react-toastify/dist/ReactToastify.css';                             // Importing the styles for react-toastify
import ChatbotEmbed from '../chatBot.jsx'
import SearchStocks from '@/components/SearchComponent'


const availableStocks = ['Reliance', 'Tata', 'Infosys', 'HDFC', 'Wipro', 'ICICI', 'Adani', 'ITC',
    'Bharti Airtel', 'Bajaj Auto', 'Larsen & Toubro', 'Maruti Suzuki', 'HCL Technologies',
    'Mahindra & Mahindra', 'Tata Steel', 'ONGC', 'Hindalco', 'Axis Bank', 'SBI',
    'Kotak Mahindra', 'Asian Paints', 'Sun Pharma', 'Tech Mahindra', 'JSW Steel',
    'Titan Company', 'UltraTech Cement', 'Grasim Industries', 'Power Grid Corporation',
    'NTPC', 'Coal India', 'BPCL', 'Hero MotoCorp', 'Nestle India', 'IndusInd Bank',
    'Divi’s Laboratories', 'Bajaj Finserv', 'Zee Entertainment', 'Apollo Hospitals',
    'Godrej Consumer Products', 'PVR', 'Tata Motors', 'Eicher Motors', 'Dabur',
    'Bata India', 'Dr. Reddy’s Laboratories', 'Motherson Sumi', 'Siemens', 'ABB India',
    'GAIL', 'Bharat Forge', 'Pidilite Industries', 'Muthoot Finance', 'IRCTC',
    'Shree Cement', 'Cipla', 'Biocon', 'Havells India', 'Ashok Leyland', 'Tata Power',
    'Exide Industries', 'Voltas', 'Colgate-Palmolive', 'Britannia', 'Federal Bank',
    'Jubilant FoodWorks', 'InterGlobe Aviation', 'Hindustan Unilever', 'Godrej Properties',
    'Glenmark Pharma', 'Mangalore Refinery', 'Aurobindo Pharma', 'Crompton Greaves',
    'Hindustan Zinc', 'Torrent Power', 'TVS Motor', 'Ambuja Cements', 'Pfizer',
    'Sun TV Network', 'Escorts', 'Yes Bank', 'MindTree', 'Max Healthcare',
    'Aditya Birla Fashion', 'Avenue Supermarts', 'Zydus Wellness', 'IDFC First Bank',
    'Page Industries', 'Blue Star', 'Bajaj Holdings', 'Lupin', 'Emami', 'Kajaria Ceramics',
    'Berger Paints', 'L&T Finance', 'Mphasis', 'Quess Corp', 'Syngene International',
    'Manappuram Finance', 'SpiceJet', 'Indiabulls Housing Finance', 'Sunteck Realty',
    'NMDC', 'Bombay Dyeing', 'Ramco Cements', 'ICICI Prudential', 'BEML', 'IDBI Bank'
];

//Main dashboard component where users can view their stocks, add balance add perform stock purchases.
const Dash = () => {
    const router = useRouter();

    //this use for fetching dynamic data 
    const [Username, setUsername] = useState('') // to store the username of the logged in user.
    const [UserStocks, setUserStocks] = useState([]); // to store the stocks data of the user.
    const [Invested, setInvested] = useState(0);// To track the total amount the user has invested.
    let CurrentTotal=0;      // A temporary variable to calculate the current value of all stocks.
    const [Current, setCurrent] = useState(0);  // To store the total current value of the user's stocks.
    const [BalanceAmount, setBalanceAmount] = useState(0);  // To store the amount user wants to add to their balance.
    const [PurchaseData, setPurchaseData] = useState({
        ticker:'',
        qty:''
    })                                                // To store data for stock purchase (ticker & quantity).

    let stockTickersURL = "";
    // Function to read a cookie's value (used for JWT and user data).
    let getCookieValue;
    let removeCookie;
    if (typeof document !== 'undefined') {
        getCookieValue = (name) => {
            const cookies = document.cookie.split(';').map(cookie => cookie.trim());
            for (const cookie of cookies) {
                const [cookieName, cookieValue] = cookie.split('=');
                if (cookieName === name) {
                    return cookieValue;
                }
            }
            return null; // Cookie not found
        };
        removeCookie = (name) => {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        };
    } else {
        getCookieValue = (name) => {
            return null; // Cookie not found
        };
        removeCookie = (name) => {
            return null;
        };
    }


     // Retrieving user data from the cookie (such as username, balance, userId).
    //const {username,balance,userId} = JSON.parse(sessionStorage.getItem('activeUser'))
    const { username, balance, userId } = JSON.parse(getCookieValue('activeUser')) || { username: "error", balance: "error", userId: "error" };
    const [UserBalance, setUserBalance] = useState(0)
     // Function to show a toast notification (for feedback after actions like adding balance, purchasing stocks, etc.)
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

    // useEffect to fetch data when component is mounted
    useEffect(() => {
        getStocks(); // Fetch user stocks data.
        getBalance();  // Fetch user's balance.
        setUsername(username.toUpperCase());  // Set the username in uppercase.
        setUserBalance(balance);
    }, []);
 // useEffect to calculate current portfolio value and invested value when stocks data changes.
    useEffect(() => {
        getCurrent();  // Recalculate current value of stocks.
        if (UserStocks.length != 0) {
            calculateBasicInfo();   // Calculate basic info like total invested value.
        }
    }, [UserStocks]);

     // Function to calculate the current value of all stocks.
    const getCurrent = async()=>{
        UserStocks.forEach(stock => {
            CurrentTotal+=(stock.ltp * stock.quantity);  // ltp: latest trading price, quantity: the number of stocks owned
            setCurrent(CurrentTotal);  // Set the total current value of the portfolio.
        });
    }

    // Function to get the user's balance from the backend.
    const getBalance=async()=>{
    const [filteredStocks, setFilteredStocks] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const handleStockSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setPurchaseData({
            ...PurchaseData,
            ticker: e.target.value,  // Update the input value
        });

        if (query.length > 0) {
            const filtered = availableStocks.filter(stock => stock.toLowerCase().includes(query));
            setFilteredStocks(filtered);
            setShowDropdown(true);
        } else {
            setFilteredStocks([]);
            setShowDropdown(false);
        }
    };
    const handleStockSelect = (stock) => {
        setPurchaseData({
            ...PurchaseData,
            ticker: stock,  // Set selected stock
        });
        setShowDropdown(false);  // Hide dropdown
    };
    const getBalance = async () => {

        //const jwt = sessionStorage.getItem('jwt');
        const jwt = getCookieValue('jwt');        // Get JWT from the cookie

        if (jwt != 0) {
            axios.defaults.headers.common['token'] = `${jwt}`;
        }
        //const u = sessionStorage.getItem('activeUser')
        const u = getCookieValue('activeUser');     // collect cookies from active user
        const req={userId:userId}                   // User data required for fetching balance.
        const b = await axios.post('https://investra-26xe.vercel.app/getBalance',req)
        // setUserBalance(b.balance)
        setUserBalance(b.data.balance)             // Set the balance in state.
    }

    // Handle change in balance input.
    const handleBalanceChange = async(e) =>{
        const { value } = e.target;
        await setBalanceAmount(value);    // Update the balanceAmount state.
const handleBalanceAdd = async () => {
    const maxLimit = 500000;  // Maximum allowed balance
    
    // Check if the new balance will exceed the max limit
    if ((parseFloat(UserBalance) + parseFloat(BalanceAmount)) > maxLimit) {
        notify(`Total balance cannot exceed ₹${maxLimit.toLocaleString()}`);
        return; // Exit the function and prevent the API call
    }
    
    try {
        const jwt = getCookieValue('jwt');
        if (jwt != 0) {
            axios.defaults.headers.common['token'] = `${jwt}`; // Set JWT token in headers
        }

        const req = { balance: BalanceAmount };
        const res = await axios.post('https://investra-26xe.vercel.app/addBalance', req);
        
        // Notify user that the balance was added successfully
        notify("Balance added successfully!");
        
        // Refresh the balance data after adding
        getBalance();
    } catch (error) {
        console.error(error);
        notify("An error occurred while adding balance");
    }
};


    // Handle stock purchase.
    const handlePurchase = async() => {
        try {
            //const jwt = sessionStorage.getItem('jwt');
            const jwt = getCookieValue('jwt');      
            if(jwt!=0){
                axios.defaults.headers.common['token'] = `${jwt}`;           // Set JWT token in headers.
            }
            const res = await axios.post('https://investra-26xe.vercel.app/stocks/purchase',PurchaseData);    // Send purchase data to the backend.
            notify(res.data);                       // Show feedback message.
            if(res.data == "Purchase successfull"){
                await getBalance();          // Refresh balance data.
                await getStocks();          // Refresh stocks data.

        if (name!=undefined && value?.length()!=0) {
            setPurchaseData({
                ...PurchaseData,
                [name]: value,
            });
        }
        else {
            (name == 'quantity') && notify("Please enter the amount of stocks")
            (name == 'ticker') && notify("Please enter the name of the stock")
        }

    }

            }

            //console.log(res.data)
        } catch (error) {
            console.log(error);    // Log errors if any.
        }
    }

     // Update stock prices to the previous day's close price.
    const updateStocks = async () => {
        try {
            //const jwt = sessionStorage.getItem('jwt');
            const jwt = getCookieValue('jwt');
          if(jwt!=0){
             axios.defaults.headers.common['token'] = `${jwt}`;
          }
          const res = await axios.post("https://investra-26xe.vercel.app/stocks/update",{});    // Send request to update stock prices.
          notify(res.data);      // Show feedback message.
          getStocks();            // Refresh stocks data after update.
        } catch (error) {
          console.error(error);    // Log errors if any.
        }
    };

    // Fetch user's stocks data from backend.
    const getStocks = async () => {
        try {
            //const jwt = sessionStorage.getItem('jwt');
            const jwt = getCookieValue('jwt');
          if(jwt!=0){
             axios.defaults.headers.common['token'] = `${jwt}`;     // Set JWT token in headers.
          }
          const res = await axios.post("https://investra-26xe.vercel.app/stocks/get",{});   // Fetch stocks data.
          //console.log(res);
          await setUserStocks(res.data);       // Set the fetched stocks data in state.
        } catch (error) {
            console.error(error);
        }
    };

     // Handle user logout, clearing cookies and redirecting to the login page.
    const handleLogout = (e) => {
        //e.preventDefault();

        document.cookie = "jwt=null; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";          // Clear JWT cookie.
        document.cookie = "activeUser=null; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";   // Clear activeUser cookie.
        router.push('/');            // Redirect to login page.
    }

      // Calculate total invested amount and prepare URL for fetching stock prices.
    const calculateBasicInfo = async () => {
        let totalInvested = 0;

        for (let i = 0; i < UserStocks.length; i++) {

            //generate url and get latest price
            stockTickersURL += String(UserStocks[i].ticker);       // Prepare URL with stock tickers.
            stockTickersURL += '.XNSE,'


            //calculate total invested money  
            const amt = UserStocks[i].price * UserStocks[i].quantity;   // Calculate total investment in this stock.
            totalInvested += amt;                                     // Sum the invested amounts.
        }
        //console.log(stockTickersURL);
        const roundedInvested = Math.ceil(totalInvested * 100.00) / 100.00;     // Round the total invested value.
        setInvested(roundedInvested);                              // Set the total invested value in state.
    };

    // Rendering JSX
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
                <p className='text-17xl font-extrabold' style={{color: "#fea240"}}>Hey, {Username}</p>
                <div className="top-buttons">
                  {/* Button to update stock prices */}
                <button className='refresh-button letter-space ' title="WARNING !! This updates the price to yesterday's close price. So use it once a day only." onClick={updateStocks}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </button>
                 {/* Popover for balance add */}
                <Popover.Root>
                    <Popover.Trigger asChild>
                        <button className='balance-button text-black letter-space'>+ BALANCE</button>
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content className="PopoverContent" sideOffset={5}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <p className="Text" style={{ marginBottom: 10 }}>
                                    Enter Amount
                                </p>
                                <fieldset className="Fieldset">
                                    <input className="Input" id="width" name='ticker'
                                    onChange={handleBalanceChange} defaultValue="0" />
                                    <button className='balance-add-button' onClick={handleBalanceAdd}>ADD</button>
                                </fieldset>
                                
                            </div>
                            <Popover.Close className="PopoverClose" aria-label="Close">
                            <Cross2Icon />
                            </Popover.Close>
                            <Popover.Arrow className="PopoverArrow" />
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>
                       {/* Logout Button */}
                    <button className='logout-button letter-space ' onClick={handleLogout}>LOGOUT</button>
                </div>
    
                <div className="content">
                    <div className="left-side">
                        <div className="overall-stats">
                            <div className="holdings">
                                <div className="holdings-lhs">
                                    <p className="font-extrabold text-11xl text-white letter-space">
                                        {parseFloat((Invested).toFixed(2))}
                                    </p>
                                    <p className="text-white my-2">invested</p>
                                </div>
                                <div className="holdings-rhs">
                                    <p className="font-extrabold text-11xl text-white letter-space">
                                        {parseFloat((Current).toFixed(2))}
                                    </p>
                                    <p className="text-white my-2">current</p>
                                </div>
                            </div>
    
                            <div className="pl">
                                <p className="mx-8 font-semibold">
                                    {parseFloat((Current - Invested).toFixed(2))}
                                </p>
                                <div className="pl-line bg-white">|</div>
                                <p className="mx-8 bg-lime-600 px-4 rounded-2xl font-semibold">
                                    {Invested !== 0 ? parseFloat(((Current - Invested) * 100 / Invested).toFixed(2)) : "--"}%
                                </p>
                            </div>
                        </div>

                        <div className="pl">
                            <p className='mx-8 font-semibold'>{parseFloat((Current-Invested).toFixed(2))}</p>
                            <div className="pl-line bg-white">|</div>
                            <p className='mx-8 bg-lime-600 px-4 rounded-2xl font-semibold'>{Invested!=0 ? parseFloat(((Current-Invested)*100/Invested).toFixed(2)) : "--"}%</p>
                        </div>
                    </div>
                    <div className="balance-buy">
                        <div className="balance">
                            <p className='font-extrabold text-5xl'>Balance</p>
                            <p className='balance-amt'>{parseFloat(UserBalance).toFixed(2)}</p>
                            
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
                                    <input
                                        className="mb-20 buy-input-field"
                                        type="number"
                                        placeholder="qty"
                                        name="quantity"
                                        onChange={handlePurchaseChange}
                                    />
                                    {showDropdown && filteredStocks.length > 0 && (
                                        <ul className="dropdown">
                                            {filteredStocks.map((stock, index) => (
                                                <li key={index} onClick={() => handleStockSelect(stock)}>
                                                    {stock}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <button className="buy-confirm" onClick={handlePurchase}>CONFIRM</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    {/* scrollbar  */}
                <ScrollArea.Root className="ScrollAreaRoot">
                    <ScrollArea.Viewport className="ScrollAreaViewport">
                        <div style={{ padding: '15px 20px' }}>
                            {/* <div className="Text text-white">Tags</div> */}
                            {UserStocks.map((stock) => {
                            //console.log(stock)
                            return(<StockCard
                                handleParentStocksGet={getStocks}
                                handleParentBalanceUpdate = {getBalance}
                                handleParentToast={notify}
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
                            {/* {TAGS.map((tag) => (
          <div className="Tag" key={tag}>
            {tag}
          </div>
        ))} */}
                        </div>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                    </ScrollArea.Scrollbar>

                    <ScrollArea.Corner className="ScrollAreaCorner" />
                    </ScrollArea.Root>

                </div>
        <ChatbotEmbed />
    </>
  )
}

export default Dash
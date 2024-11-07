import React, { useEffect, useState } from 'react';
import axios from 'axios';                        // Axios is used for making HTTP requests.
import * as Popover from '@radix-ui/react-popover';    // Radix UI Popover component for modal-like interactions.
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';  // Icons from Radix UI for popovers.

// StockCard component for displaying information about a stock and managing actions like adding, selling, and refreshing stock data.
const StockCard = (props) => {
  // State variables to manage the state of the card, input values, and the refresh functionality.
  const [CardColour, setCardColour] = useState("#F35656");        // Default color for card (red for negative performance).
  const [HoverColour, setHoverColour] = useState("#CB5959");      // Default hover color for the card.
  const [AddQuantity, setAddQuantity] = useState(0);               // State for the quantity of stocks to add.
  const [SellQuantity, setSellQuantity] = useState(0);             // State for the quantity of stocks to sell.
  const [isRefreshDisabled, setIsRefreshDisabled] = useState(false);    // State for enabling/disabling refresh button.

   // Helper function to get a specific cookie's value by name (used for authentication).
  const getCookieValue = (name) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());     // Split cookies into key-value pairs.
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');    // Split each cookie into its name and value.
      if (cookieName === name) {
        return cookieValue;              // Return the value if the cookie name matches.
      }
    }
    return null;
  };
 // useEffect hook that runs when the component mounts.
  useEffect(() => {
    // Check if the stock performance is positive (if profit/loss is >= 0).
    if (props.pl >= 0) {
      setCardColour("#5DBE74");   // Set the card color to green if the performance is positive.
      setHoverColour("#78AF4C");   // Set hover color to a different green for positive performance.
    }
    checkIfRefreshDoneToday();        // Check if the refresh operation has been done today to disable the button if necessary.
  }, []);                            // Empty dependency array means this runs only once when the component is first mounted.

  // Handle input change for adding stocks (update AddQuantity state).
  const handleAddChange = async (e) => {
    const { value } = e.target;    // Extract the value of the input.
    await setAddQuantity(value);    // Update the AddQuantity state with the entered value.
  };

  // Handle "ADD" action for purchasing stocks.
  const handleAdd = async () => {
    try {
      const PurchaseData = {
        ticker: props.ticker,   // Ticker symbol of the stock being purchased.
        quantity: AddQuantity,   // Quantity of stocks to be added.
      };
      const jwt = getCookieValue('jwt');    // Get JWT token from cookies for authentication.
      if (jwt !== 0) {
        axios.defaults.headers.common['token'] = `${jwt}`;
      }
      // Make POST request to the backend to add stocks.
      const res = await axios.post('https://investra-26xe.vercel.app/stocks/purchase', PurchaseData);
      props.handleParentStocksGet();   // Trigger parent component to refresh the stocks data.
      props.handleParentBalanceUpdate(); // Trigger parent component to update the balance.
      props.handleParentToast("Stocks Added !!");  // Display success message in the parent component.
      console.log(res.data);   // Log the response from the API (for debugging).
    } catch (error) {
      console.log(error);       // Log any errors that occur during the API request.
    }
  };

   // Handle input change for selling stocks (update SellQuantity state).
  const handleSellChange = async (e) => {
    const { value } = e.target;    // Extract the value of the input.
    await setSellQuantity(value);  // Update the SellQuantity state with the entered value.
  };

  // Handle "SELL" action for selling stocks.
  const handleSell = async () => {
    try {
      const PurchaseData = {
        ticker: props.ticker,
        quantity: SellQuantity,
      };
      const jwt = getCookieValue('jwt');  // Get JWT token from cookies for authentication.
      if (jwt !== 0) {
        axios.defaults.headers.common['token'] = `${jwt}`;
      }
      // Make POST request to the backend to sell stocks.
      const res = await axios.post('https://investra-26xe.vercel.app/stocks/sell', PurchaseData);
      props.handleParentStocksGet();   // Trigger parent component to refresh the stocks data.
      props.handleParentBalanceUpdate();   // Trigger parent component to update the balance.
      props.handleParentToast("Stocks Sold !!"); // Display success message in the parent component.
      console.log(res.data);    // Log the response from the API (for debugging).
    } catch (error) {
      console.log(error);  // Log any errors that occur during the API request.
    }
  };

   // Check if the refresh operation has been done today by comparing the current date with the stored date in localStorage.
  const checkIfRefreshDoneToday = () => {
    const lastRefreshDate = localStorage.getItem('lastRefreshDate');   // Retrieve the date of the last refresh from localStorage.
    const currentDate = new Date().toDateString(); // Get current date as string

    if (lastRefreshDate === currentDate) {
      setIsRefreshDisabled(true); // Disable if refresh already done today
    }
  };

// Handle the refresh action (update the stock prices).
  const handleRefresh = () => {
    const currentDate = new Date().toDateString();    // Get the current date as a string.
    localStorage.setItem('lastRefreshDate', currentDate);  // Store the current date as the last refresh date.
    setIsRefreshDisabled(true);                           // Disable the refresh button after the refresh is performed.

    // Perform refresh operation (e.g., API call to refresh stock data)
    props.handleParentStocksGet();
    props.handleParentToast("Prices refreshed for today!");   // Show a success toast message.
  };

  return (
    <>
      <div className="stock-card-container" style={{ backgroundColor: "#1d1d1d" }}>
        {/* Left side of the stock card displaying stock information */}
        <div className="stock-card-lhs">
          <p className='card-ticker letter-space text-white' style={{ color: CardColour }}>{props.ticker}</p>
          <div className="card-info">
            <div className="card-info-1">
              <p className='letter-space font-bold py-2 text-white'>Qty: {props.qty}</p>
              <p className='letter-space font-bold py-2 text-white'>Avg: {props.avg}</p>
              <p className='letter-space font-bold py-2 text-white'>Inv: {props.inv}</p>
            </div>
            <div className="card-info-2">
              <p className='letter-space text-11xl font-extrabold' style={{ color: CardColour }}>{props.pl}</p>
              <p className='letter-space font-bold py-2 text-white'>Close : {props.ltp}</p>
              <p className='letter-space font-bold text-white'>Net : {props.net}</p>
            </div>
          </div>
        </div>
         {/* Divider */}
        <div className='h-full bg-gray-300 w-0.5'></div>
        <div className="divider-line"></div>
        <div className="stock-card-rhs">   {/* Right side of the stock card containing add and sell buttons */}
           {/* Add Stock Popover (Modal for adding stocks) */}
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className='card-button-add'>ADD</button>   {/* Trigger button for the Add stock popover */}
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent" sideOffset={5}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p className="Text" style={{ marginBottom: 10 }}>Enter Quantity</p>
                  <fieldset className="Fieldset">
                    <input className="Input" id="width" name='ticker' defaultValue="0" onChange={handleAddChange} />
                    <button className='balance-add-button cursor-pointer' onClick={handleAdd}>ADD</button>
                  </fieldset>
                </div>
                <Popover.Close className="PopoverClose cursor-pointer" aria-label="Close">
                  <Cross2Icon />
                </Popover.Close>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <hr />
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className='card-button-sell cursor-pointer'>SELL</button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent" sideOffset={5}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p className="Text" style={{ marginBottom: 10 }}>Enter Quantity</p>
                  <fieldset className="Fieldset">
                    <input className="Input" id="width" name='ticker' defaultValue="0" onChange={handleSellChange} />
                    <button className='balance-add-button cursor-pointer' onClick={handleSell}>SELL</button>
                  </fieldset>
                </div>
                <Popover.Close className="PopoverClose" aria-label="Close">
                  <Cross2Icon />  {/* Close icon for the popover */}
                </Popover.Close>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
        <div>
          <button
            onClick={handleRefresh}           // Event handler that is triggered when the button is clicked
            disabled={isRefreshDisabled}     // Disables the button if `isRefreshDisabled` is true
            className={isRefreshDisabled ? 'disabled-button-class' : 'refresh-button-class'}   // Apply different styles based on whether the button is disabled
          >
            Refresh Prices
          </button>
          {/* If the refresh is disabled, display a message to inform the user */}
          {isRefreshDisabled && <p className="text-gray-500">You've already refreshed for today!</p>}
        </div>
      </div>
    </>
  );
};

export default StockCard;

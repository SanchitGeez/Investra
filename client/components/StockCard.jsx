import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';


const StockCard = (props) => {
  const [CardColour, setCardColour] = useState("#F35656");
  const [HoverColour, setHoverColour] = useState("#CB5959");
  const [AddQuantity, setAddQuantity] = useState(0);
  const [SellQuantity, setSellQuantity] = useState(0);
  const [isRefreshDisabled, setIsRefreshDisabled] = useState(false);

  const getCookieValue = (name) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  useEffect(() => {
    if (props.pl >= 0) {
      setCardColour("#5DBE74");
      setHoverColour("#78AF4C");
    }
    checkIfRefreshDoneToday();
  }, []);

  const handleAddChange = async (e) => {
    const { value } = e.target;
    await setAddQuantity(value);
  };

  const handleAdd = async () => {
    try {
      const PurchaseData = {
        ticker: props.ticker,
        quantity: AddQuantity,
      };
      const jwt = getCookieValue('jwt');
      if (jwt !== 0) {
        axios.defaults.headers.common['token'] = `${jwt}`;
      }
      const res = await axios.post('https://investra-26xe.vercel.app/stocks/purchase', PurchaseData);
      props.handleParentStocksGet();
      props.handleParentBalanceUpdate();
      props.handleParentToast("Stocks Added !!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSellChange = async (e) => {
    const { value } = e.target;
    await setSellQuantity(value);
  };

  const handleSell = async () => {
    try {
      const PurchaseData = {
        ticker: props.ticker,
        quantity: SellQuantity,
      };
      const jwt = getCookieValue('jwt');
      if (jwt !== 0) {
        axios.defaults.headers.common['token'] = `${jwt}`;
      }
      const res = await axios.post('https://investra-26xe.vercel.app/stocks/sell', PurchaseData);
      props.handleParentStocksGet();
      props.handleParentBalanceUpdate();
      props.handleParentToast("Stocks Sold !!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfRefreshDoneToday = () => {
    const lastRefreshDate = localStorage.getItem('lastRefreshDate');
    const currentDate = new Date().toDateString(); // Get current date as string

    if (lastRefreshDate === currentDate) {
      setIsRefreshDisabled(true); // Disable if refresh already done today
    }
  };

  const handleRefresh = () => {
    const currentDate = new Date().toDateString();
    localStorage.setItem('lastRefreshDate', currentDate);
    setIsRefreshDisabled(true);

    // Perform refresh operation (e.g., API call to refresh stock data)
    props.handleParentStocksGet();
    props.handleParentToast("Prices refreshed for today!");
  };

  return (
    <>
      <div className="stock-card-container" style={{ backgroundColor: "#1d1d1d" }}>
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
        <div className='h-full bg-gray-300 w-0.5'></div>
        <div className="divider-line"></div>
        <div className="stock-card-rhs">
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className='card-button-add cursor-pointer'>ADD</button>
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
                <Popover.Close className="PopoverClose cursor-pointer" aria-label="Close">
                  <Cross2Icon />
                </Popover.Close>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
        <div>
          <button
            onClick={handleRefresh}
            disabled={isRefreshDisabled}
            className={isRefreshDisabled ? 'disabled-button-class' : 'refresh-button-class cursor-pointer'}
          >
            Refresh Prices
          </button>
          {isRefreshDisabled && <p className="text-gray-500">You've already refreshed for today!</p>}
        </div>
      </div>
    </>
  );
};

export default StockCard;

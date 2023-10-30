"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const stocks = () => {
    const [StockList, setStockList] = useState();
    const params = {
        access_key: '24970f7e7ba06eb0e5efdb7e7df880cc'
    }

    const getStocks = async () => {
        console.log("api hitted")
        try {
            const res = await axios.get('http://api.marketstack.com/v1/eod/2023-10-18?access_key=24970f7e7ba06eb0e5efdb7e7df880cc&symbols=AAPL');
            console.log(res.data.data);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>stocks
    <button className='bg-green-100 p-5 m-5 rounded-xl' onClick={getStocks}>get stocks</button>
    </div>
  )
}

export default stocks
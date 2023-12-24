"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const stocks = () => {
    const params = {
        access_key: '24970f7e7ba06eb0e5efdb7e7df880cc'
    }
    const [ticker, setTicker] = useState('')

    //http://api.marketstack.com/v1/eod/latest?access_key=24970f7e7ba06eb0e5efdb7e7df880cc&symbols=MOIL.XNSE

    const getStocks = async () => {
        console.log("api hitted")
        try {
            const res = await axios.get('http://api.marketstack.com/v1/eod/latest?access_key='+ params.access_key+'&symbols='+ticker+'.XNSE');
            console.log(res.data.data[0].close);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
    <input placeholder='enter ticker' value={ticker} onChange={(e)=>{setTicker(e.target.value)}}></input>
    <button className='bg-green-100 p-5 m-5 rounded-xl' onClick={getStocks}>get stocks</button>
    </div>
  )
}

export default stocks
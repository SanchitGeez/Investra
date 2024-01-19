import React from 'react'

const StockCard = (props) => {
  return (
<>
    <div className="stock-card-container">
        <div className="stock-card-lhs">
          <p className='card-ticker letter-space'>{props.ticker}</p>
          <div className="card-info">
            <div className="card-info-1">
              <p className='letter-space font-bold py-2'>Qty: {props.qty}</p>
              <p className='letter-space font-bold py-2'>Avg: {props.avg}</p>
              <p className='letter-space font-bold py-2'>Inv: {props.inv}</p>
            </div>
            <div className="card-info-2">
              <p className='letter-space text-11xl  text-white font-extrabold'>-2542.12</p>
              <p className='letter-space font-bold py-2'>Close : 455.76</p>
              <p className='letter-space font-bold '>Net : 132.76</p>
            </div>
          </div>
          

        </div>
        <div className='h-full bg-gray-300 w-0.5'></div>
        <div className="stock-card-rhs">
          <button className='h-1/2 w-full text-11xl font-extrabold text-white bg-red-500 rounded-md'>ADD</button>
          <button className='h-1/2 w-full text-11xl font-extrabold text-white'>SELL</button>
        </div>
    
    </div>


</>  )
}

export default StockCard
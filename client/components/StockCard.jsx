import React,{useEffect, useState} from 'react'

const StockCard = (props) => {
  const [CardColour, setCardColour] = useState("#FF6C6C");
  const [HoverColour, setHoverColour] = useState("#CB5959")
  useEffect(() => {
    if(props.pl>=0){
      setCardColour("#8DCD5A")
      setHoverColour("#78AF4C")
    }
  }, []);
  
  return (
<>
    <div className="stock-card-container" style={{ backgroundColor: CardColour}}>
        <div className="stock-card-lhs">
          <p className='card-ticker letter-space'>{props.ticker}</p>
          <div className="card-info">
            <div className="card-info-1">
              <p className='letter-space font-bold py-2'>Qty: {props.qty}</p>
              <p className='letter-space font-bold py-2'>Avg: {props.avg}</p>
              <p className='letter-space font-bold py-2'>Inv: {props.inv}</p>
            </div>
            <div className="card-info-2">
              <p className='letter-space text-11xl  text-white font-extrabold'>{props.pl}</p>
              <p className='letter-space font-bold py-2'>Close : {props.ltp}</p>
              <p className='letter-space font-bold '>Net : {props.net}</p>
            </div>
          </div>
          

        </div>
        <div className='h-full bg-gray-300 w-0.5'></div>
        <div className="stock-card-rhs">
          <button className='h-1/2 w-full text-11xl font-extrabold text-white' style={{ backgroundColor: HoverColour}}>ADD</button>
          <button className='h-1/2 w-full text-11xl font-extrabold text-white'>SELL</button>
        </div>
    
    </div>


</>  )
}

export default StockCard
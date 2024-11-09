"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FlexibleCandlestickChart from '@/components/CandleStickGraph';

export default function StockPage({ params }) {
  const router = useRouter();
  const { stockName } = params;
  const decodedStockName = decodeURIComponent(stockName);
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (decodedStockName) {
      fetch(`https://investra-26xe.vercel.app/stock/data?q=${decodedStockName}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched stock data:", data);
          setStockData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching stock data:", error);
          setLoading(false);
        });
    }
  }, [decodedStockName]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkslategray text-white font-spartan p-8">
      <div className="w-full max-w-7xl bg-gainsboro rounded-lg shadow-md p-6 text-darkslategray">
        <h1 className="text-21xl font-bold mb-4 text-center">{decodedStockName}</h1>

        {loading ? (
          <p className="text-center text-mediumaquamarine">Loading...</p>
        ) : stockData ? (
          <div>
           <FlexibleCandlestickChart inputData={stockData} />
          </div>
        ) : (
          <p className="text-center text-5xl text-mediumaquamarine">No data available for {decodedStockName}.</p>
        )}

        <button
          onClick={() => router.back()}
          className="mt-6 w-full py-2 text-17xl bg-mediumaquamarine rounded font-semibold hover:bg-darkgray transition-colors"
        >
          Go Back
        </button>
      </div>
      
    </div>
  );
}

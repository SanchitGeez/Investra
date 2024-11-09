"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchStocks({ availableStocks }) {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [filteredStocks, setFilteredStocks] = useState(availableStocks);
    const [showList, setShowList] = useState(false);
  
    const handleSearchChange = (e) => {
      const value = e.target.value;
      setQuery(value);
      setFilteredStocks(
        availableStocks.filter((stock) =>
          stock.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShowList(true);
    };
  
    const handleStockClick = (stockName) => {
      router.push(`/stock/${stockName}`);
      setShowList(false);
    };
  
    const handleBlur = () => setTimeout(() => setShowList(false), 150);
  
    return (
      <div className="p-6 bg-darkslategray text-white rounded-lg max-w-lg mx-auto shadow-lg relative">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          onFocus={() => setShowList(true)}
          onBlur={handleBlur}
          placeholder="Search stocks..."
          className="border border-darkgray bg-gainsboro rounded w-full mb-2 text-darkslategray font-spartan text-17xl focus:outline-none"
        />
        {query && showList && (
          <ul className="bg-darkgray rounded-lg mt-2 max-h-40 overflow-y-auto text-spartan absolute w-full left-0">
            {filteredStocks.map((stock) => (
              <li
                key={stock}
                onClick={() => handleStockClick(stock)}
                className="p-2 cursor-pointer hover:bg-mediumaquamarine text-5xl"
              >
                {stock}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
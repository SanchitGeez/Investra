import React, { useState, useEffect } from 'react';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Fetch the watchlist from API or local storage
    const savedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const addToWatchlist = (item) => {
    const updatedList = [...watchlist, item];
    setWatchlist(updatedList);
    localStorage.setItem('watchlist', JSON.stringify(updatedList));
  };

  const removeFromWatchlist = (item) => {
    const updatedList = watchlist.filter(w => w !== item);
    setWatchlist(updatedList);
    localStorage.setItem('watchlist', JSON.stringify(updatedList));
  };

  return (
    <div className="watchlist-container">
      <h3>Your Watchlist</h3>
      <ul>
        {watchlist.length > 0 ? (
          watchlist.map((item, index) => (
            <li key={index}>
              {item} 
              <button onClick={() => removeFromWatchlist(item)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No items in your watchlist</p>
        )}
      </ul>
      <button onClick={() => addToWatchlist('New Stock')}>Add Stock</button>
    </div>
  );
};

export default Watchlist;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptocurrenciesList from '../CryptocurrenciesList';
import './index.css';

const CryptocurrencyTracker = () => {
  const [cryptocurrenciesData, setCryptocurrenciesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await axios.get('https://apis.ccbp.in/crypto-currency-converter');
        const data = response.data.map(crypto => ({
          currency_name: crypto.currency_name,
          usd_value: crypto.usd_value,
          euro_value: crypto.euro_value,
          id: crypto.id,
          currency_logo: crypto.currency_logo,
        }));
        setCryptocurrenciesData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchCryptocurrencies();
  }, []);

  return (
    <div className="cryptocurrency-tracker-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
      )}
    </div>
  );
};

export default CryptocurrencyTracker;

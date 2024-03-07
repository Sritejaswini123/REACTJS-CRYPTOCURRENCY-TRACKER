import React from 'react';
import './index.css';

const CryptocurrencyItem = ({ cryptocurrency }) => {
  return (
    <div className="cryptocurrency-item">
      <img src={cryptocurrency.currency_logo} alt={cryptocurrency.currency_name} />
      <div>
        <h2>{cryptocurrency.currency_name}</h2>
        <p>ID: {cryptocurrency.id}</p>
        <p>USD Value: {cryptocurrency.usd_value}</p>
        <p>Euro Value: {cryptocurrency.euro_value}</p>
      </div>
    </div>
  );
};

export default CryptocurrencyItem;

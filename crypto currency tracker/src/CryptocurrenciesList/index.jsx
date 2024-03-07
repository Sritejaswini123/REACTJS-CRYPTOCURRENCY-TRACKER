import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
const CryptocurrenciesList = ({ cryptocurrencies }) => {
    return (
      <div className="cryptocurrencies-list-container">
        {cryptocurrencies.map((crypto) => (
          <CryptocurrencyItem key={crypto.id} cryptocurrency={crypto} />
        ))}
      </div>
    );
  };
  
  export default CryptocurrenciesList;
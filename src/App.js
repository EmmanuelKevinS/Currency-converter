// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedValue, setConvertedValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFromChange = (e) => {
    setFromCurrency(e.target.value);
  };
  const handleToChange = (e) => {
    setToCurrency(e.target.value);
  };

  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${value}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      if (!data.rates) return;
      setConvertedValue(data.rates[toCurrency]);
      setIsLoading(false);
    }
    if (fromCurrency === toCurrency) return setConvertedValue(value);
    convert();
  }, [value, fromCurrency, toCurrency]);

  return (
    <div className="main-div main-div-bg-img">
      <div className="title">Currency converter</div>
      <input
        className="input"
        type="text"
        placeholder="0"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        className="select"
        value={fromCurrency}
        onChange={handleFromChange}
        disabled={isLoading}
      >
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="SGD">SGD</option>
        <option value="AUD">AUD</option>
        <option value="NZD">NZD</option>
        <option value="KRW">KRW</option>
        <option value="JPY">JPY</option>
        <option value="ILS">ILS</option>
        <option value="INR">INR</option>
        <option value="CNY">CNY</option>
        <option value="THB">THB</option>
        <option value="HKD">HKD</option>
        <option value="MXN">MXN</option>
        <option value="IDR">IDR</option>
        <option value="NOK">NOK</option>
        <option value="SEK">SEK</option>
        <option value="CHF">CHF</option>
        <option value="ISK">ISK</option>
        <option value="DKK">DKK</option>
        <option value="TRY">TRY</option>
        <option value="HUF">HUF</option>
        <option value="BGN">BGN</option>
      </select>
      <select
        className="select"
        value={toCurrency}
        onChange={handleToChange}
        disabled={isLoading}
      >
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="SGD">SGD</option>
        <option value="AUD">AUD</option>
        <option value="NZD">NZD</option>
        <option value="KRW">KRW</option>
        <option value="JPY">JPY</option>
        <option value="ILS">ILS</option>
        <option value="INR">INR</option>
        <option value="CNY">CNY</option>
        <option value="THB">THB</option>
        <option value="HKD">HKD</option>
        <option value="MXN">MXN</option>
        <option value="IDR">IDR</option>
        <option value="NOK">NOK</option>
        <option value="SEK">SEK</option>
        <option value="CHF">CHF</option>
        <option value="ISK">ISK</option>
        <option value="DKK">DKK</option>
        <option value="TRY">TRY</option>
        <option value="HUF">HUF</option>
        <option value="BGN">BGN</option>
      </select>
      <p className="words">
        {value} {fromCurrency} = {convertedValue} {toCurrency}
      </p>
    </div>
  );
}

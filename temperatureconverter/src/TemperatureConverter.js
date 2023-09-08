import React , { useState } from 'react'

const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('celsius');
    const [result, setResult] = useState('');
  
    const handleConvert = () => {
      const temp = parseFloat(temperature);
  
      if (!isNaN(temp)) {
        if (scale === 'celsius') {
          setResult(`${temp}°C is equal to ${((temp - 32) * 5/9).toFixed(2)}°F`);
        } else {
          setResult(`${temp}°F is equal to ${((temp * 9/5) + 32).toFixed(2)}°C`);
        }
      } else {
        setResult('Please enter a valid number');
      }
    };
  
    return (
      <div>
        <h1>Temperature Converter</h1>
        <div>
          <input
            type="number"
            placeholder="Enter temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <select
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </select>
        </div>
        <div>
          <button onClick={handleConvert}>Convert</button>
        </div>
        <p>{result}</p>
      </div>
    );
  };

export default TemperatureConverter
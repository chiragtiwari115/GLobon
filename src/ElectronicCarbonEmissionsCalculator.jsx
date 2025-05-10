import React, { useState } from "react";
import "./ElectronicCarbonEmissionsCalculator.css"; 

const ElectronicCarbonEmissionsCalculator = () => {
  const [device, setDevice] = useState("50");
  const [hours, setHours] = useState(1); 
  const [carbonIntensity, setCarbonIntensity] = useState(500);
  const [results, setResults] = useState([]); 

  const devices = [
    { name: "Laptop (50W)", value: "50" },
    { name: "Desktop PC (150W)", value: "150" },
    { name: "Smartphone (10W)", value: "10" },
    { name: "LED TV (100W)", value: "100" },
    { name: "Gaming Console (200W)", value: "200" },
    { name: "Refrigerator (150W, 24h)", value: "150" },
    { name: "Microwave Oven (1200W, 0.5h)", value: "1200" },
    { name: "Washing Machine (500W, 1h)", value: "500" },
  ];

  const calculateCarbon = () => {
    const power = parseFloat(device); // Device wattage
    const energyConsumed = (power / 1000) * hours; // Energy in kWh/day
    const dailyEmissions = energyConsumed * carbonIntensity; // Daily emissions in grams
    const annualEmissions = (dailyEmissions * 365) / 1000; // Annual emissions in kg

    setResults([
      {
        device: devices.find((d) => d.value === device).name,
        dailyEmissions: dailyEmissions.toFixed(2),
        annualEmissions: annualEmissions.toFixed(2),
      },
      ...results, 
    ]);
  };

  return (
    <div className="container">
      <h1>Carbon Emissions by Electronic Devices</h1>
      <form>
        <label htmlFor="device">Select Device:</label>
        <select
          id="device"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
        >
          {devices.map((device) => (
            <option key={device.value} value={device.value}>
              {device.name}
            </option>
          ))}
        </select>

        <label htmlFor="hours">Usage (Hours per Day):</label>
        <input
          type="number"
          id="hours"
          min="1"
          value={hours}
          onChange={(e) => setHours(parseFloat(e.target.value))}
          required
        />

        <label htmlFor="carbon-intensity">Carbon Intensity (gCO₂/kWh):</label>
        <input
          type="number"
          id="carbon-intensity"
          min="1"
          value={carbonIntensity}
          onChange={(e) => setCarbonIntensity(parseFloat(e.target.value))}
          required
        />

        <button type="button" onClick={calculateCarbon}>
          Calculate
        </button>
      </form>

      <div id="result">
        <h2>Results:</h2>
        <table>
          <thead>
            <tr>
              <th>Device</th>
              <th>Daily Emissions (gCO₂)</th>
              <th>Annual Emissions (kgCO₂)</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.device}</td>
                <td>{result.dailyEmissions} gCO₂</td>
                <td>{result.annualEmissions} kgCO₂</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ElectronicCarbonEmissionsCalculator;
import React, { useEffect, useState } from "react";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
function App() {
  const [data, setData] = useState({});
  useEffect(async () => {
    const fetchedData = await fetchData();
        setData(fetchedData);
    
    console.log("Fetched DATA", fetchedData);
  }, []);
console.log('State Data-->',data);
  
  return (
    <div className="container">
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;

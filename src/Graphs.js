/*import React, { useState, useEffect } from 'react';
import data from './M2.json'; // Adjust the path as needed

const Graphs = () => {
  // State to hold your JSON data
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Set JSON data when the component mounts
    setJsonData(data);
  }, []);

  return (
    <div>
      <h1>JSON Data:</h1>
      {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Graphs;
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import jsonData from './M2.json'; 

const Graphs = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(jsonData);
  }, []);

  const x = users.map(user => user.Wavelengths);
  const y = users.map(user => user.Moisture);

  const trace1 = {
    x: x,
    y: y,
    mode: 'lines',
    type: 'scatter',
  };

 
  const layout = {
    title: 'Moisture vs Wavelength',
    xaxis: { title: 'Wavelength' },
    yaxis: { title: 'Moisture' }
  };

  useEffect(() => {
    Plotly.newPlot('myPlot', [trace1], layout);
  });


  return (
    <div>
      <h2>Wavelengths</h2>
      <ul>
        {users.map(user => (
          <li>{user.Wavelengths}</li>
        ))}
      </ul>
      <h2>Moisture</h2>
      <ul>
        {users.map(user => (
          <li key={user.Moisture}>{user.Moisture}</li>
        ))}
      </ul>
      <div id="myPlot"></div>
    </div>
  );
};


export default Graphs;
*/


import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import jsonData from './M2.json';  
const Graphs = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(jsonData);
  }, []);

  // Extracting data for Plotly trace
  const x = users.map(user => user.Wavelengths);
  const y = users.map(user => user.Moisture);

  const trace1 = {
    x: x,
    y: y,
    mode: 'lines+markers',  
    name: 'Moisture vs Wavelength'
  };

  
  const layout = {
    title: 'Moisture vs Wavelength',
    xaxis: { title: 'Wavelength' },
    yaxis: { title: 'Moisture' }
  };

  // Initialize Plotly plot
  useEffect(() => {
    Plotly.newPlot('myPlot', [trace1], layout);
  }, [trace1, layout]); 

  return (
    
      <div id="myPlot"></div>
    
  );
};

export default Graphs;
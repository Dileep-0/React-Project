import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const Graphs = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('M2.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();

        const x = jsonData.map(item => item.Wavelength);
        const y = jsonData.map(item => parseFloat(item.Moisture));

        const trace1 = {
          x: x,
          y: y,
          mode: 'lines',
          type: 'scatter',
          name: 'Moisture'
        };

       
        const layout = {
          title: 'Moisture vs Wavelength',
          xaxis: { title: 'Wavelength' },
          yaxis: { title: 'Moisture' }
        };

        
        Plotly.newPlot('myPlot', [trace1], layout);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="myPlot"></div>
  );
};

export default Graphs;

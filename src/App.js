import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as tfvis from '@tensorflow/tfjs-vis';
import {NeuralNetwork} from './brain/NeuralNetwork.js';


const App = () => {
  
  useEffect(() => {
      // let learningMatrix = [[1, 2], [3, 4]];
      // let nn = new NeuralNetwork(learningMatrix);
      // nn.training();
      // let result = nn.predict();
      // console.log(result);
      (async () => {
        const data = await getData();
        const values = data.map(d => ({
          x: d.horsepower,
          y: d.mpg,
        }));
      
        tfvis.render.scatterplot(
          {name: 'Horsepower v MPG'},
          {values}, 
          {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            height: 300
          }
        );
      })();
      
  }, []);

  const getData = async () => {
    const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');  
    const carsData = await carsDataReq.json();  
    const cleaned = carsData.map(car => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    }))
    .filter(car => (car.mpg != null && car.horsepower != null));
    return cleaned;
  };

  return (
    <div className="App">
      Experiments for Tensforflow
    </div>
  );
}

export default App;

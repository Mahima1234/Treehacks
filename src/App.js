import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as  Router, Route, Switch, Link, Redirect} from "react-router-dom";
//import MapPage from "./Map";

// import Home from "Home.js";
// import Map from "Map.js";
//import {Route, Link} from 'react-router-dom';

const App = () => {
  const cities = [
    {cityname: "Lone Pine, CA, USA", climate: "Earthquake warning!😬", health: "8,765 new COVID-19 Cases", safe: "no"},
    {cityname: "Texas", climate: "Flash flood warning!🌊", health: "9,211 new COVID-19 Cases", safe: "no"},
    {cityname: "Minnesota", climate: "Cloudy🌥", health: "940 new COVID-19 Cases", safe: "no"},
    {cityname: "Izmir, Turkey", climate: "Tornado warning!🌪", health: "7,706 new COVID-19 Cases", safe: "no"},
  ]
  const renderCity = (cities, index) => {

    return(
      <tr key = {cities, index}>
        <td>{cities.cityname}</td>
        <td>{cities.climate}</td>
        <td>{cities.health}</td>
        <td>{cities.safe}</td>
      </tr>

    )
}


  return (
    <div className="App">  
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13278.139707803919!2d-117.79597095!3d33.695104650000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1613280622214!5m2!1sen!2sus"></iframe>













    <div>
      <h1>Navbar</h1>
    </div>























    <div class="container">
      <h2> Title </h2>
      <div class="select-box">
        <div class="options-container">
          <div class="option">
            <input
              type="city"
              class="city"
              id="California"
              name="Cities"
            />
            <label for="California">California</label>
          </div>

          <div class="option">
            <input type="city" class="city" id="Texas" name="Cities" />
            <label for="Texas">Texas</label>
          </div>

          <div class="option">
            <input type="city" class="city" id="Minnesota" name="Cities" />
            <label for="Minnesota">Minnesota</label>
          </div>
        </div>

      
        <div class="selected">
          Select a State
        </div>

        <div class="search-box">
          <input type="text" placeholder="Search up the city of your choice!" />
        </div>
      </div>
      
    </div>
    
    

     

       




         
          




<ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>State Name🌎 </th>
      <th>Climate🌧</th>
      <th>Health😷</th>
      <th>Is it safe?❌/✅</th>
    </tr>
  </thead>
  <tbody>
    {cities.map(renderCity)}
  </tbody>
</ReactBootStrap.Table>  
<a href="file:///C:/Users/mahim/Downloads/index.html">
  <button>Take me to the login page</button>
</a>

</div>

  );



}

export default App;

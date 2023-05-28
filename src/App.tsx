import { useState, useEffect } from 'react';
import './App.scss';
import { Country } from './types';
import CountryCard from './components/CountryCard';
import flag from "./assets/images/1280px-Flag_of_Germany.svg.png"
import expand from './assets/images/expand-more.svg'
import darkbtn from './assets/images/Group3.svg'
import search from './assets/images/search.svg'


function App() {
  const [countries, setCountries] = useState<Country[]>([])


  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all").then((response) => {
      response.json().then((data) => {
        setCountries(data)
      })
    })
  }
  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div className='hero'>
      <div className="nav-bar container">
        <h3>Where in the world?</h3>
        <div className='dark-mode'>
          <img src={darkbtn} alt="" />
          <p>Dark Mode</p></div>
      </div>
      <div className="App container">
        <div className='filter'>
          <div className="search">
            <img src={search} alt="" />
            <input type="text" placeholder='Search for a country…' />
          </div>
          <div className='filter-drop'>
            <div className='filter-label'>
              <p>Filter by Region </p>
              <img src={expand} alt="" />
            </div>
            <div className='continents'>
              <p>Africa</p>
              <p>America</p>
              <p>Asia</p>
              <p>Europe</p>
              <p>Oceania</p>
            </div>
          </div>
        </div>
        <div className='countries'>
          {countries.map((country, index) => <CountryCard key={index} country={country} />)}
        </div>
      </div></div>
  );
}

export default App;

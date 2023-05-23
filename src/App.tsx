import React from 'react';
import './App.scss';
import flag from "./assets/images/1280px-Flag_of_Germany.png"
import expand from './assets/images/expand-more.svg'
import darkbtn from './assets/images/Group3.svg'
import search from './assets/images/search.svg'

function App() {
  return (
    <div className="App container">
      <div className="nav-bar">
        <h3>Where in the world?</h3>
        <div className='dark-mode'>
          <img src={darkbtn} alt="" />
          <p>Dark Mode</p></div>
      </div>
      <div className='filter'>
        <div className="search">
          <img src={search} alt="" />
          <input type="text" placeholder='Search for a country…' />
        </div>
        <div className='filter-drop'>
          <label htmlFor="countries">Filter by Region </label>
          <select name="countries" id="countries">
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Asia">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className='countries'>
        <div className="country">
          <img src={flag} alt="" />
          <div className='description'>
            <h4>Germany</h4>
            <p><span>Population:</span> 81,770,900</p>
            <p><span>Region:</span> Europe</p>
            <p><span>Capital:</span> Berlin</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

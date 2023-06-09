import { useState } from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import NavBar from "./components/NavBar"
import './App.scss';
import { ThemeContext } from './context/themeContext';

import MainPage from "./pages/MainPage"
import DetailsPage from "./pages/DetailsPage"

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <main className={`theme-${theme}`}>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:code/details" element={<DetailsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

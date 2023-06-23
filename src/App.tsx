import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.scss";
import ScrollToTop from "./ScrollToTop";
import { ThemeContext } from "./context/themeContext";

import MainPage from "./pages/MainPage";
import DetailsPage from "./pages/DetailsPage";
import { Country } from "./types";
import { CountryContext } from "./context/countryContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const [countries, setCountries] = useState<Country[]>([])

  return (
    <CountryContext.Provider value={{countries, setCountries}}>
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <main className={`theme-${theme}`}>
            <NavBar />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:code/details" element={<DetailsPage />} />
              </Routes>
            </ScrollToTop>
          </main>
        </BrowserRouter>
    </ThemeContext.Provider>
    </CountryContext.Provider>
  );
}

export default App;

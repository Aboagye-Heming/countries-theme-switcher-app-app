import NavBar from "./components/NavBar"
import './App.scss';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import MainPage from "./pages/MainPage"
import DetailsPage from "./pages/DetailsPage"

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;

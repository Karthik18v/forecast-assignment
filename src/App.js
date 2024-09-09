import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import CityDetails from "./components/CityDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityName" element={<CityDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

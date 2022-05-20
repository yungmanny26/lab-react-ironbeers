import "./App.css";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  let { pathname } = useLocation()
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/beers">All beers</NavLink>
      <NavLink to="/random-beer">Get Random beer</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
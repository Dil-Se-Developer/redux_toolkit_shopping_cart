import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Navbar from "./components/layout/Navbar";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;

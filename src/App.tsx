import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";

const App = () => {
  return (
    <div className="dark:bg-slate-800 transition-all duration-700 overflow-hidden">
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
